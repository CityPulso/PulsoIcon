import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "twenty" (CC0-1.0). Twenty is a trademark of its owner.
export const BrandTwenty = createIcon("BrandTwenty", "brand-twenty", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "4.5" }],
    ["path", { d: "M6.5 9.5a2.5 2.5 0 0 1 5 0c0 2-5 3.5-5 5.5h5" }, { r: "draw" }],
    ["rect", { x: "13.5", y: "7", width: "4.5", height: "8", rx: "2.25" }, { r: "draw", d: 0.2 }],
  ],
});
