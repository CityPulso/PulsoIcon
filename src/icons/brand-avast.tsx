import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "avast" (CC0-1.0). Avast is a trademark of its owner.
export const BrandAvast = createIcon("BrandAvast", "brand-avast", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7 17C8 13 9.5 9 12 5" }, { r: "draw" }],
    ["path", { d: "M7 17c3-3.5 6.5-5.5 11-6.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 17c3.5-1 7-1 10.5 .5" }, { r: "draw", d: 0.2 }],
  ],
});
