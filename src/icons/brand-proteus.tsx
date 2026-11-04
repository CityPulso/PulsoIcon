import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "proteus" (CC0-1.0). Proteus is a trademark of its owner.
export const BrandProteus = createIcon("BrandProteus", "brand-proteus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "5.5" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M6.5 12h11" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21.4 8.58A10 3.5 -20 1 0 2.6 15.42A10 3.5 -20 1 0 21.4 8.58" }, { r: "spin", d: 0.05, a: 360, o: [12, 12] }],
  ],
});
