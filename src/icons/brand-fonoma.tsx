import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fonoma" (CC0-1.0). Fonoma is a trademark of its owner.
export const BrandFonoma = createIcon("BrandFonoma", "brand-fonoma", {
  nodes: [
    ["circle", { cx: "5.5", cy: "7", r: "3" }, { r: "pop", o: [5.5, 7] }],
    ["rect", { x: "11", y: "4", width: "11", height: "6", rx: "3" }, { r: "slide", d: 0.05, x: 1 }],
    ["rect", { x: "2", y: "14", width: "11", height: "6", rx: "3" }, { r: "slide", d: 0.1, x: -1 }],
    ["circle", { cx: "18.5", cy: "17", r: "3" }, { r: "pop", d: 0.15, o: [18.5, 17] }],
  ],
});
