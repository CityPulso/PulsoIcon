import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "obb" (CC0-1.0). ÖBB is a trademark of its owner.
export const BrandObb = createIcon("BrandObb", "brand-obb", {
  nodes: [
    ["path", { d: "M5.25 8.5a3.5 3.5 0 1 0 3.5 3.5" }, { r: "draw", o: [5.25, 12] }],
    ["path", { d: "M9.25 7.75 6.5 10.75" }, { r: "pop", d: 0.2, o: [8, 9.25] }],
    ["path", { d: "M10.75 8v8h2.5a2 2 0 0 0 0-4 2 2 0 0 0 0-4z" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17.25 8v8h2.5a2 2 0 0 0 0-4 2 2 0 0 0 0-4z" }, { r: "draw", d: 0.24 }],
  ],
});
