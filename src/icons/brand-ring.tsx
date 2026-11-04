import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ring" (CC0-1.0). Ring is a trademark of its owner.

export const BrandRing = createIcon("BrandRing", "brand-ring", {
  nodes: [
    ["path", { d: "M2 17v-7M2 12.5A2.5 2.5 0 0 1 4.5 10" }, { r: "draw" }],
    ["path", { d: "M7 10v7M7 6.5h.01" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 17v-7M10 13a2.5 2.5 0 0 1 5 0v4" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "19", cy: "12.75", r: "2.5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M21.5 10v7.5a2.5 2.5 0 0 1-4.5 1.5" }, { r: "draw", d: 0.35 }],
  ],
});
