import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sennheiser" (CC0-1.0). Sennheiser is a trademark of its owner.

export const BrandSennheiser = createIcon("BrandSennheiser", "brand-sennheiser", {
  nodes: [
    ["rect", { x: "2.5", y: "4", width: "19", height: "16", rx: "1" }],
    ["path", { d: "M6 17c5 0 7-10 12-10" }, { r: "draw", d: 0.05 }],
  ],
});
