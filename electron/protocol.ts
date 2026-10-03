import { net, protocol } from "electron";
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
 * Serves the static Next.js export (`out/`) under app://talewick/.
 * Paths without an extension resolve to their `index.html` (trailingSlash export).
 */
export function serveStaticExport(outDir: string) {
  protocol.handle(APP_SCHEME, (request) => {
    const { pathname } = new URL(request.url);
    let relative = decodeURIComponent(pathname);
    if (relative.endsWith("/")) relative += "index.html";
    else if (!path.extname(relative)) relative += "/index.html";

    const filePath = path.normalize(path.join(outDir, relative));
    if (!filePath.startsWith(outDir)) {
      return new Response("Forbidden", { status: 403 });
    }
    return net.fetch(pathToFileURL(filePath).toString());
  });
}
