/**
 * Starts the icon galleries, so a fresh clone needs only `npm install` and this.
 *
 *   npm run preview                 every gallery at once (they link to each other)
 *   npm run preview -- vue astro    only these
 *
 * Ports: 10205 (React) to 10211 (Astro), or PULSOICON_PORT_<FRAMEWORK> from the shell, .env.local or .env (see
 * .env.example). A port another program holds moves to the next free one, and every gallery is told where the others are.
 *
 * The Angular gallery reads pulsoicon-angular from its ng-packagr build (the library's signal inputs need the Angular
 * compiler), so pulsoicon-core and pulsoicon-angular are built first when their dist is missing or older than the source.
 */
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Before frameworks.ts reads the ports. loadEnvFile keeps variables already set, so the shell wins over .env.local over .env.
for (const file of [".env.local", ".env"]) if (existsSync(path.join(root, file))) process.loadEnvFile(path.join(root, file));
const { FRAMEWORKS, FrameworkEnum } = await import("../preview/shared/frameworks.js");
type FrameworkEnum = import("../preview/shared/frameworks.js").FrameworkEnum;

const bin = (name: string) => path.join(root, "node_modules", ".bin", process.platform === "win32" ? `${name}.cmd` : name);

const names = process.argv.slice(2);
const unknown = names.filter((n) => !FRAMEWORKS.some((f) => f.id === n));
if (unknown.length) {
  console.error(`Unknown preview: ${unknown.join(", ")}. Pick from: ${FRAMEWORKS.map((f) => f.id).join(", ")}`);
  process.exit(1);
}
const chosen = names.length ? FRAMEWORKS.filter((f) => names.includes(f.id)) : FRAMEWORKS;

/** Newest modification time of the files under `entries` (relative to the repository), skipping dist and node_modules. */
function newest(entries: string[]): number {
  let time = 0;
  const walk = (abs: string) => {
    const stat = statSync(abs);
    if (!stat.isDirectory()) return void (time = Math.max(time, stat.mtimeMs));
    for (const name of readdirSync(abs)) if (name !== "dist" && name !== "node_modules") walk(path.join(abs, name));
  };
  for (const e of entries) if (existsSync(path.join(root, e))) walk(path.join(root, e));
  return time;
}

function buildIfStale(pkg: string, output: string, sources: string[]): void {
  const out = path.join(root, "packages", pkg, output);
  if (existsSync(out) && statSync(out).mtimeMs >= newest(sources.map((s) => path.join("packages", pkg, s)))) return;
  console.log(`Building pulsoicon-${pkg} for the Angular gallery…`);
  const run = spawnSync("npm", ["run", "build", "-w", `packages/${pkg}`], { cwd: root, stdio: "inherit", shell: process.platform === "win32" });
  if (run.status !== 0) process.exit(run.status ?? 1);
}

if (chosen.some((f) => f.id === FrameworkEnum.ANGULAR)) {
  buildIfStale("core", "dist/index.js", ["src", "package.json", "tsconfig.build.json"]);
  buildIfStale("angular", "dist/fesm2022/pulsoicon-angular.mjs", ["src", "all", "names", "package.json", "ng-package.json", "tsconfig.lib.json"]);
}

const command = (id: FrameworkEnum): [string, string[]] =>
  id === FrameworkEnum.ASTRO ? [bin("astro"), ["dev", "--root", "preview/astro"]] : [bin("vite"), ["--config", `preview/${id}/vite.config.ts`]];

/** Whether nothing else is listening on `port` (the servers listen on every interface). */
const portFree = (port: number) =>
  new Promise<boolean>((resolve) => {
    const probe = createServer()
      .once("error", () => resolve(false))
      .once("listening", () => probe.close(() => resolve(true)))
      .listen(port, "0.0.0.0");
  });

// The galleries keep their order: when any of their ports is taken, they all move together to the next run of free
// ports above them. The servers get the final ports as PULSOICON_PORT_<FRAMEWORK>, so each one listens where it should
// and links to the others where they are.
const ports = new Map(FRAMEWORKS.map((f) => [f.id, f.port]));
const allFree = async (list: number[]) => (await Promise.all(list.map(portFree))).every(Boolean);
const taken = [];
for (const f of chosen) if (!(await portFree(f.port))) taken.push(`${f.port} (${f.label})`);
if (taken.length) {
  let base = Math.max(...ports.values()) + 1;
  while (!(await allFree(chosen.map((_, i) => base + i)))) base++;
  chosen.forEach((f, i) => ports.set(f.id, base + i));
  console.warn(`Port ${taken.join(", ")} is used by another program, so the galleries use ${base}-${base + chosen.length - 1} instead.`);
}
for (const [id, port] of ports) process.env[`PULSOICON_PORT_${id.toUpperCase()}`] = String(port);
const running = chosen.map((f) => ({ ...f, port: ports.get(f.id)! }));

// Without colour codes, to recognise the lines each server prints for every network interface.
const plain = (line: string) => line.replace(/\x1b\[[0-9;]*m/g, "");
const noise = (line: string) => !plain(line).trim() || /Network\b/.test(plain(line)) || /^\s+https?:\/\//.test(plain(line));

const width = Math.max(...running.map((f) => f.id.length));
const children = running.map((f) => {
  const [cmd, args] = command(f.id);
  const env = process.env.NO_COLOR ? process.env : { ...process.env, FORCE_COLOR: "1" };
  const child = spawn(cmd, args, { cwd: root, env, shell: process.platform === "win32" });
  const prefix = `[${f.id.padEnd(width)}] `;
  for (const stream of [child.stdout, child.stderr]) {
    let rest = "";
    stream.on("data", (chunk: Buffer) => {
      const lines = (rest + chunk.toString()).split("\n");
      rest = lines.pop() ?? "";
      for (const line of lines) if (!noise(line)) process.stdout.write(prefix + line + "\n");
    });
  }
  child.on("exit", (code) => code && console.error(`${prefix}stopped (exit ${code})`));
  return child;
});

console.log(`\nPulsoIcon galleries:\n${running.map((f) => `  ${f.label.padEnd(8)} http://localhost:${f.port}/`).join("\n")}\n`);

const stop = () => {
  for (const child of children) child.kill("SIGTERM");
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
