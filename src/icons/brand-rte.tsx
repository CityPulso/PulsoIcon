import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rte" (CC0-1.0). RTÉ is a trademark of its owner.
export const BrandRte = createIcon("BrandRte", "brand-rte", {
  nodes: [
    ["path", { d: "M2.5 18V8H5a2.5 2.5 0 0 1 0 5H2.5M5 13l2.5 5" }, { r: "draw" }],
    ["path", { d: "M10 8h5M12.5 8v10" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M21.5 8H20a2.5 2.5 0 0 0-2.5 2.5v5A2.5 2.5 0 0 0 20 18h1.5M17.5 13h3.5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M19.5 5.5l2-2" }, { r: "pop", d: 0.4, o: [20.5, 4.5] }],
  ],
});
