import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "roon" (CC0-1.0). Roon is a trademark of its owner.

export const BrandRoon = createIcon("BrandRoon", "brand-roon", {
  nodes: [
    ["path", { d: "M2 16.5v-5M2 14a2.5 2.5 0 0 1 2.5-2.5" }, { r: "draw" }],
    ["circle", { cx: "8.25", cy: "14", r: "2.5" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "14.25", cy: "14", r: "2.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18.5 16.5v-5M18.5 14a1.75 1.75 0 0 1 3.5 0v2.5" }, { r: "draw", d: 0.3 }],
  ],
});
