import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "walkman" (CC0-1.0). WALKMAN is a trademark of its owner.
export const BrandWalkman = createIcon("BrandWalkman", "brand-walkman", {
  nodes: [
    ["path", { d: "M2 8.5v3a2.5 3.5 0 0 0 5 0 2.5 3.5 0 0 1 5 0 2.5 3.5 0 0 0 5 0" }, { r: "draw" }],
    ["circle", { cx: "20.5", cy: "11.5", r: "1.5" }, { r: "pop", d: 0.3, o: [20.5, 11.5] }],
  ],
});
