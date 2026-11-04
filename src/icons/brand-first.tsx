import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "first" (CC0-1.0). FIRST is a trademark of its owner.
export const BrandFirst = createIcon("BrandFirst", "brand-first", {
  nodes: [
    ["rect", { x: "2.5", y: "8.5", width: "7", height: "7", rx: "0.5" }, { r: "pop", d: 0.05, o: [6, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "roll", d: 0.15, a: 2, o: [12, 12] }],
    ["polygon", { points: "14.5 15.5 18 8.5 21.5 15.5" }, { r: "pop", d: 0.25, o: [18, 13] }],
  ],
});
