import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "polywork" (CC0-1.0). Polywork is a trademark of its owner.

export const BrandPolywork = createIcon("BrandPolywork", "brand-polywork", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M9 3v18M15 3v18" }, { r: "grow", d: 0.05, o: [12, 21] }],
    ["path", { d: "M3 9h18M3 15h18" }, { r: "growX", d: 0.15, o: [3, 12] }],
  ],
});
