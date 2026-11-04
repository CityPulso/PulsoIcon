import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qi" (CC0-1.0). Qi is a trademark of its owner.
export const BrandQi = createIcon("BrandQi", "brand-qi", {
  nodes: [
    ["path", { d: "M12 8.5a4.5 4.5 0 1 0 0 9" }, { r: "draw" }],
    ["path", { d: "M12 8v14" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 10v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M17 4.5h.01" }, { r: "bounce", y: -1, a: 1, d: 0.3 }],
  ],
});
