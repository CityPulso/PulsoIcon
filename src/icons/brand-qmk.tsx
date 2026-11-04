import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qmk" (CC0-1.0). QMK is a trademark of its owner.
export const BrandQmk = createIcon("BrandQmk", "brand-qmk", {
  nodes: [
    ["rect", { x: "5", y: "5", width: "14", height: "14", rx: "2" }],
    ["path", { d: "M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" }, { r: "flicker" }],
    ["path", { d: "M9 9v1.5a3 3 0 0 0 6 0V9M12 8v8" }, { r: "draw", d: 0.1 }],
  ],
});
