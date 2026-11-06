import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { frameMarkup, iconFrame } from "pulsoicon-core";
import { ICONS as DATA } from "pulsoicon-core/all";
import { ICON_NAMES, ICONS } from "pulsoicon-react/all";
import { describe, expect, it } from "vitest";

// pulsoicon-core's iconFrame is what the Vue and Svelte packages render; it must be React's markup exactly.
describe("core frame", () => {
  it("is React's markup for every icon, outline and solid", () => {
    const off: string[] = [];
    for (const name of ICON_NAMES) {
      for (const solid of [false, true]) {
        const react = renderToStaticMarkup(createElement(ICONS[name], { solid })).replace(/pulsoicon[\w-]*?-(fill|line)\b/g, "MASK-$1");
        const core = frameMarkup(iconFrame(DATA[name], { solid, maskId: "pulsoicon" })).replace(/pulsoicon[\w-]*?-(fill|line)\b/g, "MASK-$1");
        if (react !== core) off.push(`${name}${solid ? " (solid)" : ""}`);
      }
    }
    expect(off).toEqual([]);
  }, 300_000);
});
