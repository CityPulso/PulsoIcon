import type { IconData } from "pulsoicon-core";

import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALIASES, RECIPE_NAMES, RECIPES, solidNodes, subpathsOf } from "pulsoicon-core";
import { ICON_NAMES, ICONS } from "pulsoicon-core/all";
import { ICON_NAMES as NAMES } from "pulsoicon-core/names";
import { describe, expect, it } from "vitest";

const iconsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "icons");

describe("icon data", () => {
  it("has one icon per file, keyed by the file name", () => {
    const files = readdirSync(iconsDir)
      .filter((f) => f.endsWith(".ts"))
      .map((f) => f.replace(/\.ts$/, ""))
      .sort();
    expect([...ICON_NAMES].sort()).toEqual(files);
    expect([...NAMES]).toEqual([...ICON_NAMES].sort());
    for (const key of ICON_NAMES) expect(ICONS[key].key).toBe(key);
  });

  it("gives every icon shapes, and moves at least one part", () => {
    const still = ICON_NAMES.filter((key) => {
      const d: IconData = ICONS[key];
      return !d.nodes.length || (!d.svg && !d.nodes.some((n) => n[2]));
    });
    expect(still).toEqual([]);
  });

  it("uses only known recipes, and every shape has geometry", () => {
    const off: string[] = [];
    for (const key of ICON_NAMES) {
      const d = ICONS[key];
      for (const [tag, attrs, m] of d.nodes) {
        if (m && !RECIPE_NAMES.includes(m.r)) off.push(`${key}: ${m.r}`);
        if (!subpathsOf(tag, attrs).length) off.push(`${key}: empty ${tag}`);
      }
      // The solid drawing may hold a bare "move to" left over from splitting a path; it draws nothing.
      for (const [, , m] of solidNodes(d)) if (m && !RECIPE_NAMES.includes(m.r)) off.push(`${key} solid: ${m.r}`);
    }
    expect(off).toEqual([]);
  });

  it("points every alias at an existing icon", () => {
    const unknown = Object.keys(ALIASES).filter((key) => !ICONS[key]);
    expect(unknown).toEqual([]);
  });
});

describe("recipes", () => {
  it("give every recipe a resting and an animated state", () => {
    for (const name of RECIPE_NAMES) {
      const { normal, animate } = RECIPES[name]({ d: 0.1, x: 1, y: -1, a: 2 });
      expect(normal, name).toBeTypeOf("object");
      expect(Object.keys(animate).filter((k) => k !== "transition").length, name).toBeGreaterThan(0);
    }
  });
});
