import type { IconData } from "pulsoicon-core";

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALIASES, frameMarkup, iconFrame } from "pulsoicon-core";
import { ICONS as DATA } from "pulsoicon-core/all";
import { ICON_NAMES } from "pulsoicon-astro/names";
import { beforeAll, describe, expect, it } from "vitest";

import Bell from "../src/icons/bell.astro";
import Calendar from "../src/icons/calendar.astro";
import Icon from "../src/Icon.astro";

const src = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src");

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

/** Markup with the per-render mask ids, the player's data attributes and the serialisers' style punctuation evened out. */
const normalize = (markup: string) =>
  markup
    .replace(/<!--.*?-->/g, "")
    .replace(/ data-pulsoicon[\w-]*="[^"]*"/g, "")
    .replace(/pulsoicon[\w-]*?-(fill|line)\b/g, "MASK-$1")
    .replace(/style="([^"]*)"/g, (_, s: string) => `style="${s.split(";").map((p) => p.trim().replace(/\s*:\s*/, ":")).filter(Boolean).join(";")}"`);

const exportNames = (data: IconData) => [data.name, ...(ALIASES[data.key] ?? [])].flatMap((n) => [n, `${n}Icon`]);
const svgOf = (html: string) => html.match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? "";
const resting = (data: IconData, solid: boolean) => normalize(frameMarkup(iconFrame(data, { solid, maskId: "pulsoicon" })));

describe("icon set", () => {
  it("has a component for every core icon, exported under its name, Icon-suffixed name and aliases", () => {
    expect([...ICON_NAMES].sort()).toEqual(Object.keys(DATA).sort());
    const index = readFileSync(path.join(src, "index.ts"), "utf8");
    for (const key of ICON_NAMES) {
      const names = exportNames(DATA[key]);
      expect(index, key).toContain(`export { ${names.map((n) => `default as ${n}`).join(", ")} } from "./icons/${key}.astro";`);
      expect(readFileSync(path.join(src, "icons", `${key}.astro`), "utf8"), key).toContain(`register(${DATA[key].name});`);
    }
  });

  it("renders every icon exactly like the React package, outline and solid", async () => {
    const off: string[] = [];
    for (const key of ICON_NAMES) {
      for (const solid of [false, true]) {
        const html = await container.renderToString(Icon, { props: { data: DATA[key], solid } });
        if (normalize(svgOf(html)) !== resting(DATA[key], solid)) off.push(`${key}${solid ? " (solid)" : ""}`);
      }
    }
    expect(off).toEqual([]);
  }, 600_000);

  it("ships the icon's data to the client player with each generated component", async () => {
    const html = await container.renderToString(Bell);
    expect(normalize(svgOf(html))).toBe(resting(DATA.bell, false));
    expect(html).toContain('data-pulsoicon="bell"');
    expect(html).toMatch(/<script[^>]*type="module"/);
  });
});

describe("props", () => {
  const render = async (props: Record<string, unknown>) => svgOf(await container.renderToString(Calendar, { props }));

  it("defaults to lucide-compatible attributes", async () => {
    const markup = await render({});
    expect(markup).toContain('width="24"');
    expect(markup).toContain('stroke="currentColor"');
    expect(markup).toContain('stroke-width="2"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar"');
  });

  it("applies size, color, strokeWidth, class and style", async () => {
    const markup = await render({ size: 40, color: "red", strokeWidth: 1.5, class: "x", style: { marginTop: "2px" } });
    expect(markup).toContain('width="40"');
    expect(markup).toContain('stroke="red"');
    expect(markup).toContain('stroke-width="1.5"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar x"');
    expect(markup).toContain('style="overflow:visible;margin-top:2px"');
  });

  it("keeps the stroke constant in pixels with absoluteStrokeWidth", async () => {
    expect(await render({ size: 48, absoluteStrokeWidth: true })).toContain('stroke-width="1"');
  });

  it("passes other attributes to the svg and turns the motion props into player attributes", async () => {
    const markup = await render({ "aria-label": "Date", "data-x": "1", animated: false, autoAnimated: false, solid: true });
    expect(markup).toContain('aria-label="Date"');
    expect(markup).toContain('data-x="1"');
    expect(markup).toContain("data-pulsoicon-solid");
    expect(markup).toContain('data-pulsoicon-animated="false"');
    expect(markup).toContain('data-pulsoicon-auto="false"');
    expect(markup).not.toMatch(/ (animated|autoAnimated|solid)=/);
  });
});
