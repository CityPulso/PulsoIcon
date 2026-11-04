import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "buhl" (CC0-1.0). Buhl is a trademark of its owner.
export const BrandBuhl = createIcon("BrandBuhl", "brand-buhl", {
  nodes: [
    ["path", { d: "M2 6v11m0-4a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0" }, { r: "draw" }],
    ["path", { d: "M8 11v4a2 2 0 0 0 4 0v-4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 6v11m0-4a2 2 0 0 1 4 0v4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 6v11" }, { r: "draw", d: 0.3 }],
  ],
});
