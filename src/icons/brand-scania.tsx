import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "scania" (CC0-1.0). Scania is a trademark of its owner.
export const BrandScania = createIcon("BrandScania", "brand-scania", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 9 8.5 5.5l2 1.5L12 5l1.5 2 2-1.5L15 9z" }, { r: "drop", d: 0.1, y: -1, a: 3 }],
    ["path", { d: "M9.5 19v-3.5a3.5 3.5 0 0 1 6.5-1.8l-2.5.8" }, { r: "draw", d: 0.2 }],
  ],
});
