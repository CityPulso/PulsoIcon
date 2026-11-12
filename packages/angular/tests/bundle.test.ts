import { build } from "esbuild";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Bundles an app that imports `source` from the published package (dist) and pulsoicon-core's build, as a consumer's bundler would. */
async function bundle(source: string): Promise<string> {
  const out = await build({
    stdin: { contents: source, resolveDir: here, loader: "ts" },
    bundle: true,
    write: false,
    format: "esm",
    minify: true,
    treeShaking: true,
    external: ["@angular/*", "motion", "tslib"],
    alias: { "pulsoicon-angular": path.join(here, "..", "dist", "fesm2022", "pulsoicon-angular.mjs") },
    logLevel: "silent",
  });
  return out.outputFiles[0].text;
}

describe("tree-shaking", () => {
  it("ships only the icons an app imports", async () => {
    const code = await bundle('import { Bell, PulsoIconComponent } from "pulsoicon-angular"; console.log(Bell, PulsoIconComponent);');
    expect(code).toContain('"bell"');
    for (const other of ['"heart"', '"settings"', '"alarm-clock"', '"brand-github"']) expect(code).not.toContain(other);
    // One icon, the component and the frame / player code: the full set is several megabytes.
    expect(code.length).toBeLessThan(60_000);
  });
});
