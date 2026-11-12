// node tests/browser/motion-parity.mjs [key …]: React (pulsoicon-react), pulsoicon-core/dom and the Vue, Svelte, Solid and Preact packages
// must be in the same state at the same moments.
import { build } from "esbuild";
import { readFile } from "node:fs/promises";
import { compile } from "svelte/compiler";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const pkg = (p) => path.join(root, "packages", p);
const alias = Object.fromEntries(["react", "core", "vue", "svelte", "solid", "preact"].map((p) => [`pulsoicon-${p}`, pkg(`${p}/src/index.ts`)]));
const out = await build({
  entryPoints: [path.join(root, "tests/browser/motion-parity.entry.tsx")],
  bundle: true,
  write: false,
  format: "iife",
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"', __VUE_OPTIONS_API__: "true", __VUE_PROD_DEVTOOLS__: "false", __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false" },
  conditions: ["svelte", "browser"],
  alias: { vue: "vue/dist/vue.runtime.esm-bundler.js" },
  plugins: [
    {
      name: "workspace",
      setup(b) {
        b.onResolve({ filter: /^pulsoicon(-core|-react|-vue|-svelte|-solid|-preact)?(\/.*)?$/ }, ({ path: p }) => {
          if (alias[p]) return { path: alias[p] };
          const [, flavour, rest] = p.match(/^pulsoicon(-core|-react|-vue|-svelte|-solid|-preact)?\/(.*)$/);
          return { path: pkg(`${flavour ? flavour.slice(1) : "react"}/src/${rest}.ts`) };
        });
        // Svelte 5 strips the TypeScript in <script lang="ts"> itself.
        b.onLoad({ filter: /\.svelte$/ }, async ({ path: file }) => ({
          contents: compile(await readFile(file, "utf8"), { filename: file, generate: "client" }).js.code,
          loader: "js",
          resolveDir: path.dirname(file),
        }));
      },
    },
  ],
});
const keys = process.argv.slice(2).length ? process.argv.slice(2) : ["bell", "brand-cineplex", "alarm-clock-check", "loader", "heart", "arrow-right", "settings", "door-open", "shopping-cart", "sparkles"];
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent("<!doctype html><body></body>");
await page.addScriptTag({ content: out.outputFiles[0].text });
let failures = 0;
const runs = [...keys.flatMap((key) => [false, true].map((solid) => [key, solid, "handle"])), ...keys.slice(0, 4).map((key) => [key, false, "play"])];
for (const [key, solid, trigger] of runs) {
  {
    await page.evaluate(([k, s, t]) => window.mount(k, s, t), [key, solid, trigger]).catch((e) => {
      throw new Error(`${key}${solid ? " solid" : ""}: ${e.message}`);
    });
    await page.waitForTimeout(50);
    const rest = await page.evaluate(() => window.sample());
    await page.evaluate(() => window.start());
    const samples = [rest];
    for (const t of [120, 200, 200, 600]) {
      await page.waitForTimeout(t);
      samples.push(await page.evaluate(() => window.sample()));
    }
    samples.forEach((sample, i) => {
      for (const other of ["core", "vue", "svelte", "solid", "preact"]) {
        const diff = sample.react.map((r, j) => [r, sample[other][j]]).filter(([r, c]) => !close(r, c));
        if (sample.react.length !== sample[other].length || diff.length) {
          failures++;
          console.log(`${key}${solid ? " solid" : ""} (${trigger}) ${other} sample ${i}: ${sample.react.length}/${sample[other].length} elements`, diff.slice(0, 3));
        }
      }
    });
  }
}
await browser.close();
console.log(failures ? `${failures} mismatched samples` : `motion parity: ${keys.length} icons × outline/solid, plus ${runs.length - keys.length * 2} played through the play prop: React = core = Vue = Svelte = Solid = Preact`);
process.exit(failures ? 1 : 0);

/** Same state, allowing the few milliseconds the two players start apart. */
function close(a, b) {
  if (a === b) return true;
  const na = a?.match(/-?\d*\.?\d+(e-?\d+)?/g) ?? [];
  const nb = b?.match(/-?\d*\.?\d+(e-?\d+)?/g) ?? [];
  if (na.length !== nb.length || a.replace(/-?\d*\.?\d+(e-?\d+)?/g, "#") !== b.replace(/-?\d*\.?\d+(e-?\d+)?/g, "#")) return false;
  return na.every((v, i) => Math.abs(Number(v) - Number(nb[i])) < 0.08 * Math.max(1, Math.abs(Number(v))));
}
