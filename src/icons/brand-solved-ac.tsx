import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "solveddotac" (CC0-1.0). solved.ac is a trademark of its owner.
export const BrandSolvedAc = createIcon("BrandSolvedAc", "brand-solved-ac", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "3" }],
    ["path", { d: "M5.5 15l2.5-6 2.5 6" }, { r: "draw" }],
    ["path", { d: "M6.5 13h3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18.5 9.75a3 3 0 1 0 0 4.5" }, { r: "draw", d: 0.3 }],
  ],
});
