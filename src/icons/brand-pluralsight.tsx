import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pluralsight" (CC0-1.0). Pluralsight is a trademark of its owner.

export const BrandPluralsight = createIcon("BrandPluralsight", "brand-pluralsight", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M10 6.5v11l8.5-5.5z" }, { r: "press", a: 0.12, o: [13, 12] }],
    ["path", { d: "M6.5 9v6l4.5-3z" }, { r: "press", d: 0.06, a: 0.12, o: [8, 12] }],
  ],
});
