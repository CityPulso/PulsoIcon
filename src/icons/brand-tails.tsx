import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tails" (CC0-1.0). Tails is a trademark of its owner.
export const BrandTails = createIcon("BrandTails", "brand-tails", {
  nodes: [
    ["path", { d: "M4 18V5l6-2v13zM4 18l6 3 7-3.5" }, { r: "press", a: 0.04, o: [10, 20] }],
    ["path", { d: "M6.5 7.5v2M6.5 12v2" }, { r: "press", a: 0.04, o: [10, 20] }],
    ["rect", { x: "13", y: "11.5", width: "7", height: "5", rx: "1" }, { r: "pop", d: 0.1, o: [16.5, 14] }],
    ["path", { d: "M14.5 11.5v-2a2 2 0 0 1 4 0v2" }, { r: "lift", d: 0.15, a: 1.5 }],
  ],
});
