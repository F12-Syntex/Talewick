// Screenshots the running app so UI changes are actually seen.
//   yarn snap                         production build (runs `yarn build` first)
//   yarn snap:dev                     dev mode (React StrictMode), starts its own next dev
//   yarn snap:dev --url http://localhost:3000   reuse an already running `yarn dev`
// Options: --name <label>  --hover "<css selector>" (repeatable)  --size 1280x820
// Writes PNGs to .snapshots/ and exits 1 if the page logged errors or warnings.
import { mkdirSync } from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { problems, ROOT, withApp } from "./lib/electron-harness.mjs";

const { values } = parseArgs({
  options: {
    dev: { type: "boolean", default: false },
    url: { type: "string" },
    name: { type: "string", default: "home" },
    hover: { type: "string", multiple: true, default: [] },
    size: { type: "string", default: "1280x820" },
  },
});

const mode = values.dev ? "dev" : "prod";
const [width, height] = values.size.split("x").map(Number);
const outDir = path.join(ROOT, ".snapshots");
mkdirSync(outDir, { recursive: true });

const result = await withApp({ mode, url: values.url, width, height }, async ({ win, logs }) => {
  const files = [];
  const shot = async (suffix) => {
    const file = path.join(outDir, `${mode}-${values.name}${suffix}.png`);
    await win.screenshot({ path: file });
    files.push(file);
  };
  await shot("");
  for (const [i, selector] of values.hover.entries()) {
    await win.hover(selector);
    await win.waitForTimeout(600);
    await shot(`-hover${i + 1}`);
  }
  return { files, logs };
});

for (const file of result.files) console.log(`saved ${path.relative(ROOT, file)}`);
const bad = problems(result.logs);
if (bad.length) {
  console.error(`\n${bad.length} console problem(s):`);
  for (const log of bad) console.error(`  [${log.type}] ${log.text}`);
  process.exit(1);
}
console.log("console: clean");
