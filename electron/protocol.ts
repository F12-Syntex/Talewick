import { net, protocol } from "electron";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const APP_SCHEME = "app";
export const APP_ORIGIN = `${APP_SCHEME}://talewick`;

/** Must run before the app `ready` event. */
export function registerAppSchemePrivileges() {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: APP_SCHEME,
      privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true },
    },
  ]);
}

/**
 * Client navigation requests route segment data as one dotted file name
 * (`quotes/__next.quotes.__PAGE__.txt`), but the export writes it as folders
 * (`quotes/__next.quotes/__PAGE__.txt`). Map the first form onto the second.
 */
function segmentDataPath(filePath: string) {
  const match = /^__next\.(.+)\.txt$/.exec(path.basename(filePath));
  if (!match) return null;
  const [first, ...rest] = match[1].split(".");
  if (rest.length === 0) return null;
  return path.join(path.dirname(filePath), `__next.${first}`, ...rest.slice(0, -1), `${rest[rest.length - 1]}.txt`);
}

/**
 * Serves the static Next.js export (`out/`) under app://talewick/.
 * Paths without an extension resolve to their `index.html` (trailingSlash export).
 */
export function serveStaticExport(outDir: string) {
  protocol.handle(APP_SCHEME, (request) => {
    const { pathname } = new URL(request.url);
    let relative = decodeURIComponent(pathname);
    if (relative.endsWith("/")) relative += "index.html";
    else if (!path.extname(relative)) relative += "/index.html";

    let filePath = path.normalize(path.join(outDir, relative));
    if (!filePath.startsWith(outDir)) {
      return new Response("Forbidden", { status: 403 });
    }
    if (!existsSync(filePath)) {
      const segment = segmentDataPath(filePath);
      if (!segment || !existsSync(segment)) return new Response("Not found", { status: 404 });
      filePath = segment;
    }
    return net.fetch(pathToFileURL(filePath).toString());
  });
}
