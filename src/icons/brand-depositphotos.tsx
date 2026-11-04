import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "depositphotos" (CC0-1.0). Depositphotos is a trademark of its owner.
export const BrandDepositphotos = createIcon("BrandDepositphotos", "brand-depositphotos", {
  nodes: [
    ["circle", { cx: "10", cy: "14", r: "7" }, { r: "roll", x: -1, a: 1, o: [10, 14] }],
    ["circle", { cx: "10", cy: "14", r: "2" }, { r: "roll", x: -1, a: 1, o: [10, 14] }],
    ["rect", { x: "16", y: "3", width: "5", height: "5", rx: "0.5" }, { r: "drop", y: -1, a: 3, o: [18.5, 5.5] }],
  ],
});
