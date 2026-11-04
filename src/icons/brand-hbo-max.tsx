import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hbomax" (CC0-1.0). HBO Max is a trademark of its owner.

export const BrandHboMax = createIcon("BrandHboMax", "brand-hbo-max", {
  nodes: [
    ["path", { d: "M2 11.5V16" }, { r: "draw" }],
    ["path", { d: "M2 12.5a1.75 1.75 0 0 1 3.5 0V16" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M5.5 12.5a1.75 1.75 0 0 1 3.5 0V16" }, { r: "draw", d: 0.12 }],
    ["circle", { cx: "13", cy: "13.75", r: "2.25" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15.25 11.5V16" }, { r: "draw", d: 0.26 }],
    ["path", { d: "M17.5 11.5l4 4.5" }, { r: "draw", d: 0.32 }],
    ["path", { d: "M21.5 11.5l-4 4.5" }, { r: "draw", d: 0.38 }],
  ],
});
