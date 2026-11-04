import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "veepee" (CC0-1.0). Veepee is a trademark of its owner.

export const BrandVeepee = createIcon("BrandVeepee", "brand-veepee", {
  nodes: [
    ["path", { d: "M10 15c0-5 3-9.5 8.5-11 .5 5-3 9.5-8.5 11z" }, { r: "flip", o: [10, 12] }],
    ["path", { d: "M10 15c3-1 6 0 7.5 2.5-3 1.5-6 .5-7.5-2.5z" }, { r: "flip", d: 0.08, o: [10, 12] }],
    ["path", { d: "M10 15c-1 3-3 5-5.5 5.5" }, { r: "draw", d: 0.15, o: [7, 18] }],
  ],
});
