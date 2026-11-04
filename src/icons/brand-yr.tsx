import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "yr" (CC0-1.0). Yr is a trademark of its owner.

export const BrandYr = createIcon("BrandYr", "brand-yr", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 8l2.5 4L11 8M8.5 12v4" }, { r: "draw", d: 0.05, o: [8.5, 12] }],
    ["path", { d: "M13.5 16V8H16a2 2 0 0 1 0 4h-2.5M16 12l2 4" }, { r: "draw", d: 0.2, o: [15.75, 12] }],
  ],
});
