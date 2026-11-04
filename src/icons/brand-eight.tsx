import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "eight" (CC0-1.0). Eight is a trademark of its owner.
export const BrandEight = createIcon("BrandEight", "brand-eight", {
  nodes: [
    ["circle", { cx: "7", cy: "12", r: "4.5" }, { r: "roll", a: 1, o: [7, 12] }],
    ["rect", { x: "13", y: "7.75", width: "4.25", height: "4.25" }, { r: "flip", o: [15.1, 9.9] }],
    ["rect", { x: "17.25", y: "12", width: "4.25", height: "4.25" }, { r: "flip", d: 0.1, o: [19.4, 14.1] }],
  ],
});
