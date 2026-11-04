import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qlik" (CC0-1.0). Qlik is a trademark of its owner.
export const BrandQlik = createIcon("BrandQlik", "brand-qlik", {
  nodes: [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["circle", { cx: "11", cy: "11", r: "3" }, { r: "pulse", o: [11, 11] }],
    ["path", { d: "M17 17l4.5 4.5" }, { r: "draw", d: 0.1 }],
  ],
});
