import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "avajs" (CC0-1.0). avajs is a trademark of its owner.
export const BrandAvajs = createIcon("BrandAvajs", "brand-avajs", {
  nodes: [
    ["path", { d: "M2.5 16 5 7l2.5 9" }, { r: "float", o: [5, 12] }],
    ["path", { d: "M9 7l3 9 3-9" }],
    ["path", { d: "M16.5 16 19 7l2.5 9" }, { r: "float", o: [19, 12], d: 0.1 }],
    ["path", { d: "M5 19v1" }, { r: "flicker" }],
    ["path", { d: "M19 19v1" }, { r: "flicker", d: 0.1 }],
  ],
});
