import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bim" (CC0-1.0). BIM is a trademark of its owner.
export const BrandBim = createIcon("BrandBim", "brand-bim", {
  nodes: [
    ["rect", { x: "1.5", y: "6", width: "21", height: "12", rx: "4" }],
    ["path", { d: "M5 9.5v5h2a1.25 1.25 0 0 0 0-2.5H5h1.75a1.25 1.25 0 0 0 0-2.5z" }, { r: "draw" }],
    ["path", { d: "M10.5 9.5v5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M13 14.5v-5l2.75 3.5 2.75-3.5v5" }, { r: "draw", d: 0.24 }],
  ],
});
