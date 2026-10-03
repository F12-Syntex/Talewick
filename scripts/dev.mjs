// Starts Next dev and Electron together on the first free port from 3000,
// so a busy port (another app, a leftover server) never blocks `yarn dev`.
import net from "node:net";
import { concurrently } from "concurrently";

function isFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => server.close(() => resolve(true)));
    server.listen(port);
  });
}

async function findFreePort(start, attempts = 50) {
  for (let port = start; port < start + attempts; port++) {
    if (await isFree(port)) return port;
  }
  throw new Error(`No free port found in ${start}-${start + attempts - 1}`);
}

const port = await findFreePort(3000);
const devUrl = `http://localhost:${port}`;
console.log(`Talewick dev server: ${devUrl}`);

const { result } = concurrently(
  [
    { name: "next", prefixColor: "blue", command: `next dev --port ${port}` },
    {
      name: "electron",
      prefixColor: "magenta",
      command: `yarn -s build:electron && wait-on tcp:${port} && electron . --dev`,
      env: { TALEWICK_DEV_URL: devUrl },
    },
  ],
  { killOthersOn: ["failure", "success"] },
);

result.then(
  () => process.exit(0),
  () => process.exit(1),
);
