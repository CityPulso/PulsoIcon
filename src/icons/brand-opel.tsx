import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "opel" (CC0-1.0). Opel is a trademark of its owner.
export const BrandOpel = createIcon("BrandOpel", "brand-opel", {
  nodes: [
    ["path", { d: "M5 8.5a8 8 0 0 1 14 0" }],
    ["path", { d: "M19 15.5a8 8 0 0 1-14 0" }],
    ["path", { d: "M2 11.5h11l-2 1.5h11" }, { r: "draw", o: [12, 12] }],
  ],
});
