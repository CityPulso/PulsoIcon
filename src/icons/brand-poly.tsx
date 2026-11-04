import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "poly" (CC0-1.0). Poly is a trademark of its owner.

export const BrandPoly = createIcon("BrandPoly", "brand-poly", {
  nodes: [
    ["path", { d: "M4 21V3l6 6" }, { r: "draw" }],
    ["circle", { cx: "13", cy: "12", r: "4.5" }, { r: "roll", d: 0.1, x: 1, a: 1, o: [13, 12] }],
    ["path", { d: "M16.5 15 21.5 11" }, { r: "draw", d: 0.2 }],
  ],
});
