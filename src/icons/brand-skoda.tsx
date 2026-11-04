import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "skoda" (CC0-1.0). ŠKODA is a trademark of its owner.
export const BrandSkoda = createIcon("BrandSkoda", "brand-skoda", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5.5 15.5C6 10 9.5 6.5 14 6.5c1.5 0 2.5 1 2.5 2.5l-3 3 5 3.5" }, { r: "draw" }],
    ["path", { d: "M5.5 15.5h13" }, { r: "slide", x: 1, a: 1.5, d: 0.1 }],
  ],
});
