import "@angular/compiler";

import type { Type } from "@angular/core";
import type { IconData } from "pulsoicon-core";

import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideServerRendering, renderApplication } from "@angular/platform-server";
import { frameMarkup, iconFrame } from "pulsoicon-core";
import { ICONS as DATA } from "pulsoicon-core/all";
import * as Pulso from "pulsoicon-angular";
import { ICON_NAMES, ICONS } from "pulsoicon-angular/all";
import { describe, expect, it } from "vitest";

/** Server-renders `template` (with `ctx` as the component's fields) and returns every <svg> in it. */
async function ssr(template: string, ctx: Record<string, unknown> = {}): Promise<string[]> {
  const App = Component({ selector: "app-root", imports: [Pulso.PulsoIconComponent, Pulso.PulsoIconDirective], template })(
    class {
      constructor() {
        Object.assign(this, ctx);
      }
    },
  ) as Type<unknown>;
  const html = await renderApplication((context) => bootstrapApplication(App, { providers: [provideServerRendering()] }, context), {
    document: "<html><head></head><body><app-root></app-root></body></html>",
    url: "http://localhost/",
    allowedHosts: ["localhost"],
  });
  return html.match(/<svg[\s\S]*?<\/svg>/g) ?? [];
}

/** Markup with the per-render mask ids, attribute order and the serialisers' style punctuation evened out. */
const normalize = (markup: string) =>
  markup
    .replace(/<!--.*?-->/g, "")
    .replace(/pulsoicon[\w-]*?-(fill|line)\b/g, "MASK-$1")
    .replace(/style="([^"]*)"/g, (_, s: string) => `style="${s.split(";").map((p) => p.trim().replace(/\s*:\s*/, ":")).filter(Boolean).join(";")}"`)
    .replace(/<(\w+)((?:\s+[\w:-]+="[^"]*")*)\s*>/g, (_, tag: string, attrs: string) => `<${tag}${(attrs.match(/[\w:-]+="[^"]*"/g) ?? []).sort().map((a) => ` ${a}`).join("")}>`);

const resting = (data: IconData, solid: boolean) => normalize(frameMarkup(iconFrame(data, { solid, maskId: "pulsoicon" })));

describe("icon set", () => {
  it("re-exports every core icon, with its name, Icon-suffixed name and aliases", () => {
    expect([...ICON_NAMES].sort()).toEqual(Object.keys(DATA).sort());
    for (const name of ICON_NAMES) {
      const display = DATA[name].name as keyof typeof Pulso;
      expect(Pulso[display], name).toBe(ICONS[name]);
      expect(Pulso[`${display}Icon` as keyof typeof Pulso], name).toBe(ICONS[name]);
    }
    expect(Pulso.Gear).toBe(Pulso.Settings);
  });

  it("renders every icon exactly like the React package, outline and solid", async () => {
    const off: string[] = [];
    const runs = ICON_NAMES.flatMap((name) => [false, true].map((solid) => ({ name, solid, data: ICONS[name] })));
    for (let at = 0; at < runs.length; at += 2000) {
      const chunk = runs.slice(at, at + 2000);
      const svgs = await ssr('@for (r of runs; track $index) { <pulso-icon [icon]="r.data" [solid]="r.solid" /> }', { runs: chunk });
      expect(svgs).toHaveLength(chunk.length);
      chunk.forEach(({ name, solid }, i) => {
        if (normalize(svgs[i]) !== resting(DATA[name], solid)) off.push(`${name}${solid ? " (solid)" : ""}`);
      });
    }
    expect(off).toEqual([]);
  }, 600_000);
});

describe("inputs", () => {
  const render = async (attrs: string) => normalize((await ssr(`<pulso-icon [icon]="icon" ${attrs} />`, { icon: Pulso.Calendar }))[0]);

  it("defaults to lucide-compatible attributes", async () => {
    const markup = await render("");
    expect(markup).toContain('width="24"');
    expect(markup).toContain('stroke="currentColor"');
    expect(markup).toContain('stroke-width="2"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar"');
    expect(markup).toContain('aria-hidden="true"');
  });

  it("applies size, color, strokeWidth and boolean attributes", async () => {
    const markup = await render('size="40" color="red" [strokeWidth]="1.5" solid');
    expect(markup).toContain('width="40"');
    expect(markup).toContain('stroke="red"');
    expect(markup).toContain('stroke-width="1.5"');
    expect(markup).toContain('fill="red"');
  });

  it("keeps the stroke constant in pixels with absoluteStrokeWidth", async () => {
    expect(await render('[size]="48" absoluteStrokeWidth')).toContain('stroke-width="1"');
  });

  it("labels the icon for assistive technology", async () => {
    const markup = await render('label="Date"');
    expect(markup).toContain('aria-label="Date"');
    expect(markup).toContain('role="img"');
    expect(markup).not.toContain("aria-hidden");
  });

  it("draws into your own <svg> with the directive and keeps its attributes", async () => {
    const [svg] = await ssr('<svg pulsoIcon [icon]="icon" class="mine" data-x="1" style="margin: 2px"></svg>', { icon: Pulso.Calendar });
    const markup = normalize(svg);
    expect(markup).toMatch(/class="(mine pulsoicon pulsoicon-calendar|pulsoicon pulsoicon-calendar mine)"/);
    expect(markup).toContain('data-x="1"');
    expect(markup).toContain("margin:2px");
    expect(markup).toContain("overflow:visible");
    expect(markup).toContain('d="M3 9h18"');
  });
});
