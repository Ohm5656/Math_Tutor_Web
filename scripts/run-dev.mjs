import { rmSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import process from "node:process";
import { createRequire } from "node:module";

const cwd = process.cwd();
const nextDir = path.join(cwd, ".next");
const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

try {
  rmSync(nextDir, { recursive: true, force: true });
  process.stdout.write("Cleared stale .next cache before starting dev server.\n");
} catch (error) {
  process.stderr.write(`Failed to clear .next: ${error instanceof Error ? error.message : String(error)}\n`);
}

const userArgs = process.argv.slice(2);
const forceWebpack = userArgs.includes("--webpack");
const filteredArgs = userArgs.filter((arg) => arg !== "--webpack");
const hasTurboFlag = filteredArgs.includes("--turbopack");
const args = ["dev", ...(forceWebpack || hasTurboFlag ? [] : ["--turbopack"]), ...filteredArgs];

const child = spawn(process.execPath, [nextBin, ...args], {
  cwd,
  stdio: "inherit",
  env: process.env
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
