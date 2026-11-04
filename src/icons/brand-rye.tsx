import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rye" (CC0-1.0). Rye is a trademark of its owner.
export const BrandRye = createIcon("BrandRye", "brand-rye", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 18c1-4 3-7 6.5-9" }, { r: "sway", a: 6, o: [9, 18] }],
    ["path", { d: "M9 18c-2.5-3-2-6.5 1-9 1.5 3 1.5 6-1 9z" }, { r: "sway", d: 0.05, a: 8, o: [9, 18] }],
    ["path", { d: "M11 14.5c1.5-3 4-5 7-5-1 3-3.5 5-7 5z" }, { r: "sway", d: 0.12, a: 8, o: [11, 14.5] }],
  ],
});
