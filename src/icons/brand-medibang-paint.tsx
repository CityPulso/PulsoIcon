import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "medibangpaint" (CC0-1.0). MediBang Paint is a trademark of its owner.
export const BrandMedibangPaint = createIcon("BrandMedibangPaint", "brand-medibang-paint", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }],
    ["path", { d: "M16 6.5c-4.5 0-8.5 3-8.5 7.5a4.5 4.5 0 0 0 9 0c0-2.5-1.5-4.5-.5-7.5z" }, { r: "drop", y: -1, a: 3 }],
    ["path", { d: "M7.8 15.2c2.5 1 5.5.8 8.6-1" }, { r: "draw", d: 0.3 }],
  ],
});
