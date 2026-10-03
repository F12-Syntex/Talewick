// Launches the real Talewick Electron app under Playwright so UI changes can be seen and checked.
// Used by scripts/snapshot.mjs; import `withApp` for ad-hoc interaction checks too.
import { execSync, spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { _electron } from "playwright-core";

const require = createRequire(import.meta.url);
export const ROOT = path.resolve(import.meta.dirname, "../..");

// Known noise:
// - Electron warns about CSP in unpackaged builds only.
// - next dev injects CSS after load, so next/font preloads look unused for a moment (production is clean).
const IGNORED = [
  /Electron Security Warning \(Insecure Content-Security-Policy\)/,
  /was preloaded using link preload but not used within a few seconds/,
];

function isFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => server.close(() => resolve(true)));
    server.listen(port);
  });
}

async function findFreePort(start) {
  for (let port = start; port < start + 50; port++) if (await isFree(port)) return port;
  throw new Error(`No free port from ${start}`);
}

async function waitForUrl(url, timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function killTree(child) {
  if (!child?.pid) return;
  try {
    if (process.platform === "win32") execSync(`taskkill /pid ${child.pid} /T /F`, { stdio: "ignore" });
    else process.kill(-child.pid, "SIGTERM");
  } catch {
    // already gone
  }
}

/**
 * Runs `fn({ app, win, logs })` against a fresh Talewick window, then cleans everything up.
 * mode "prod" loads the static build in out/ (run `yarn build` first).
 * mode "dev" uses `url` if given (an already running `next dev`), otherwise starts its own on a free port.
 */
export async function withApp({ mode = "prod", url, width = 1280, height = 820 } = {}, fn) {
  const userData = mkdtempSync(path.join(os.tmpdir(), "talewick-snap-"));
  const env = { ...process.env, TALEWICK_USER_DATA: userData };
  const args = ["."];
  let server;

  try {
    if (mode === "dev") {
      let devUrl = url;
      if (!devUrl) {
        const port = await findFreePort(3100);
        devUrl = `http://localhost:${port}`;
        server = spawn(process.execPath, [path.join(ROOT, "node_modules/next/dist/bin/next"), "dev", "--port", String(port)], {
          cwd: ROOT,
          stdio: ["ignore", "pipe", "pipe"],
          detached: process.platform !== "win32",
        });
        // Next allows one dev server per project. If the user's `yarn dev` is running, reuse it.
        const existing = await new Promise((resolve) => {
          let output = "";
          const onData = (chunk) => {
            output += chunk;
            if (/already running/i.test(output)) {
              const match = /Local:\s+(http:\/\/\S+)/.exec(output.slice(output.search(/already running/i)));
              if (match) resolve(match[1]);
            }
          };
          server.stdout.on("data", onData);
          server.stderr.on("data", onData);
          server.once("exit", () => resolve(null));
          waitForUrl(devUrl).then(() => resolve(null), () => resolve(null));
        });
        if (existing) {
          console.log(`Reusing the running dev server at ${existing}`);
          devUrl = existing;
          server = undefined;
        }
      }
      await waitForUrl(devUrl);
      env.TALEWICK_DEV_URL = devUrl;
      args.push("--dev");
    }

    const app = await _electron.launch({ executablePath: require("electron"), args, cwd: ROOT, env });
    const logs = [];
    try {
      const win = await app.firstWindow();
      win.on("console", (msg) => {
        if (msg.type() === "error" || msg.type() === "warning") logs.push({ type: msg.type(), text: msg.text() });
      });
      win.on("pageerror", (err) => logs.push({ type: "pageerror", text: String(err) }));
      win.on("requestfailed", (req) => logs.push({ type: "requestfailed", text: `${req.url()} (${req.failure()?.errorText})` }));
      await win.setViewportSize({ width, height });
      await win.waitForLoadState("load");
      await win.evaluate(() => document.fonts.ready);
      await win.waitForTimeout(1500);
      return await fn({ app, win, logs });
    } finally {
      await app.close().catch(() => {});
    }
  } finally {
    killTree(server);
    rmSync(userData, { recursive: true, force: true });
  }
}

/** Logs that should fail a check: errors and warnings that are not known noise. */
export function problems(logs) {
  return logs.filter((log) => !IGNORED.some((re) => re.test(log.text)));
}
