import { spawn } from "node:child_process";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { runSmokeTests } from "./smoke-routes.mjs";

const host = process.env.SMOKE_HOST ?? "127.0.0.1";
const port = Number(process.env.SMOKE_PORT ?? 3000);
const baseUrl = `http://${host}:${port}`;

async function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { headers: { "cache-control": "no-cache" } });
      if (response.ok) {
        return;
      }
    } catch {
      // Keep retrying while the server is booting.
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for server at ${url}`);
}

function terminateProcess(childProcess) {
  if (!childProcess || childProcess.exitCode !== null) {
    return;
  }

  childProcess.kill("SIGTERM");
}

async function run() {
  const nextBinPath = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  const serverProcess = spawn(
    process.execPath,
    [nextBinPath, "start", "--hostname", host, "--port", String(port)],
    {
      stdio: "inherit",
      env: process.env,
    },
  );

  try {
    await waitForServer(baseUrl);
    await runSmokeTests(baseUrl);
  } finally {
    terminateProcess(serverProcess);
  }
}

run().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
