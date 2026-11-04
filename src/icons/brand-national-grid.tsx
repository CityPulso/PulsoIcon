import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nationalgrid" (CC0-1.0). National Grid is a trademark of its owner.
export const BrandNationalGrid = createIcon("BrandNationalGrid", "brand-national-grid", {
  nodes: [
    ["path", { d: "M3 17v-7M3 13a3.5 3.5 0 0 1 7 0v4" }, { r: "draw" }],
    ["circle", { cx: "16.5", cy: "13", r: "3.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M20 10v7.5a3.5 3.5 0 0 1-6.3 2" }, { r: "draw", d: 0.25 }],
  ],
});
