/**
 * Records PulsoIcon_README_Loop.gif: serves scripts/readme-gif with Vite, steps a fake clock one frame at a time in
 * headless Chromium (so every frame is exactly FRAME_MS apart, however slow the machine), screenshots each frame at 2x
 * and encodes the GIF with Python Pillow (one shared palette, so the colours do not shimmer between frames).
 *
 *   npm run readme:gif
 *
 * Needs a Playwright Chromium (`npx playwright-core install chromium`) and `python3` with Pillow.
 */
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { chromium } from "playwright-core";
import { createServer } from "vite";

import { FRAME_MS, LOOP_MS } from "./timeline.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "../..");
const out = path.join(repo, "PulsoIcon_README_Loop.gif");
const WIDTH = 800;
const HEIGHT = 500;

const src = (pkg: string, file: string) => path.join(repo, "packages", pkg, "src", file);

const server = await createServer({
  root: here,
  logLevel: "warn",
  plugins: [react()],
  resolve: {
    alias: ["core", "react"].flatMap((pkg) => [
      { find: new RegExp(`^pulsoicon-${pkg}$`), replacement: src(pkg, "index.ts") },
      { find: new RegExp(`^pulsoicon-${pkg}/(.*)$`), replacement: src(pkg, "$1") },
    ]),
  },
  server: { port: 0, host: "127.0.0.1" },
});
await server.listen();
const url = server.resolvedUrls!.local[0];

const frames = mkdtempSync(path.join(tmpdir(), "pulsoicon-gif-"));
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 2, reducedMotion: "no-preference" });
  // Without the Web Animations API, motion runs every animation on requestAnimationFrame, which the fake clock drives;
  // native animations would follow the real clock and race ahead of the frames.
  await page.addInitScript(() => {
    delete (Element.prototype as Partial<Element>).animate;
  });
  await page.clock.install({ time: 0 });
  await page.goto(url);
  await page.waitForFunction(() => typeof window.setLoopTime === "function");
  await page.evaluate(() => document.fonts.ready);

  const count = LOOP_MS / FRAME_MS;
  for (let i = 0; i < count; i++) {
    await page.evaluate((ms) => window.setLoopTime(ms), i * FRAME_MS);
    await page.clock.runFor(FRAME_MS);
    await page.screenshot({ path: path.join(frames, `${String(i).padStart(4, "0")}.png`) });
  }
  console.log(`${count} frames, ${LOOP_MS} ms loop`);
} finally {
  await browser.close();
  await server.close();
}

const encode = `
import glob, sys
from PIL import Image
frames_dir, out, w, h, ms = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])
frames = [Image.open(p).convert("RGB").resize((w, h), Image.LANCZOS) for p in sorted(glob.glob(frames_dir + "/*.png"))]
# One palette from a strip of every frame, so a colour keeps its index from frame to frame.
strip = Image.new("RGB", (w, h * len(frames[::8])))
for i, f in enumerate(frames[::8]):
    strip.paste(f, (0, i * h))
palette = strip.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
quantized = [f.quantize(palette=palette, dither=Image.Dither.NONE) for f in frames]
quantized[0].save(out, save_all=True, append_images=quantized[1:], duration=ms, loop=0, optimize=True, disposal=1)
print(out)
`;
const result = spawnSync("python3", ["-I", "-c", encode, frames, out, String(WIDTH), String(HEIGHT), String(FRAME_MS)], { stdio: "inherit" });
rmSync(frames, { recursive: true, force: true });
if (result.status !== 0) process.exit(result.status ?? 1);
