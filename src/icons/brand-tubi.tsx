import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tubi" (CC0-1.0). Tubi is a trademark of its owner.
export const BrandTubi = createIcon("BrandTubi", "brand-tubi", {
  nodes: [
    ["path", { d: "M3.5 7v7.5a2 2 0 0 0 2 2M2 10h3.5" }, { r: "draw" }],
    ["path", { d: "M8 10v4.5a2 2 0 0 0 4 0V10M12 14.5v2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14.5 6.5v10M14.5 14.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21.5 10v6.5M21.5 7h.01" }, { r: "draw", d: 0.3 }],
  ],
});
