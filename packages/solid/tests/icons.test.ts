import type { IconData } from "pulsoicon-core";

import { frameMarkup, iconFrame } from "pulsoicon-core";
import { ICONS as DATA } from "pulsoicon-core/all";
import * as Pulso from "pulsoicon-solid";
import { ICON_NAMES, ICONS } from "pulsoicon-solid/all";
import { createComponent } from "solid-js";
import { renderToString } from "solid-js/web";
import { describe, expect, it } from "vitest";

const ssr = (icon: Pulso.PulsoIcon, props: Record<string, unknown> = {}) => renderToString(() => createComponent(icon, props));

/** Markup with the per-render mask ids, Solid's hydration keys and the serialisers' spacing and style punctuation evened out. */
const normalize = (markup: string) =>
  markup
    .replace(/<!--.*?-->/g, "")
    .replace(/ data-hk="[^"]*"/g, "")
    .replace(/ class="([^"]*?)\s+"/g, ' class="$1"')
    .replace(/ +>/g, ">")
    .replace(/pulsoicon[\w-]*?-(fill|line)\b/g, "MASK-$1")
    .replace(/style="([^"]*)"/g, (_, s: string) => `style="${s.split(";").map((p) => p.trim().replace(/\s*:\s*/, ":")).filter(Boolean).join(";")}"`);

const resting = (data: IconData, solid: boolean) => normalize(frameMarkup(iconFrame(data, { solid, maskId: "pulsoicon" })));

describe("icon set", () => {
  it("has every core icon, with its name, Icon-suffixed name and aliases", () => {
    expect([...ICON_NAMES].sort()).toEqual(Object.keys(DATA).sort());
    for (const name of ICON_NAMES) {
      const display = DATA[name].name as keyof typeof Pulso;
      expect(Pulso[display], name).toBe(ICONS[name]);
      expect(Pulso[`${display}Icon` as keyof typeof Pulso], name).toBe(ICONS[name]);
    }
    expect(Pulso.Gear).toBe(Pulso.Settings);
  });

  it("renders every icon exactly like the React package, outline and solid", () => {
    const off: string[] = [];
    for (const name of ICON_NAMES) {
      for (const solid of [false, true]) {
        if (normalize(ssr(ICONS[name], { solid })) !== resting(DATA[name], solid)) off.push(`${name}${solid ? " (solid)" : ""}`);
      }
    }
    expect(off).toEqual([]);
  }, 300_000);
});

describe("props", () => {
  const render = (props: Record<string, unknown>) => normalize(ssr(Pulso.Calendar, props));

  it("defaults to lucide-compatible attributes", () => {
    const markup = render({});
    expect(markup).toContain('width="24"');
    expect(markup).toContain('stroke="currentColor"');
    expect(markup).toContain('stroke-width="2"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar"');
  });

  it("applies size, color, strokeWidth, class and style", () => {
    const markup = render({ size: 40, color: "red", strokeWidth: 1.5, class: "x", style: { "margin-top": "2px" } });
    expect(markup).toContain('width="40"');
    expect(markup).toContain('stroke="red"');
    expect(markup).toContain('stroke-width="1.5"');
    expect(markup).toContain('class="pulsoicon pulsoicon-calendar x"');
    expect(markup).toMatch(/style="overflow:visible;margin-top:2px"/);
  });

  it("keeps the stroke constant in pixels with absoluteStrokeWidth", () => {
    expect(render({ size: 48, absoluteStrokeWidth: true })).toContain('stroke-width="1"');
  });

  it("passes other attributes to the svg and keeps the icon props off it", () => {
    const markup = render({ "aria-label": "Date", "data-x": "1", animated: false, solid: true });
    expect(markup).toContain('aria-label="Date"');
    expect(markup).toContain('data-x="1"');
    expect(markup).not.toMatch(/animated|play=|solid=/i);
  });
});
