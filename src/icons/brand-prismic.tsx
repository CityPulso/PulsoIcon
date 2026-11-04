import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "prismic" (CC0-1.0). Prismic is a trademark of its owner.
export const BrandPrismic = createIcon("BrandPrismic", "brand-prismic", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M9.5 7.5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z" }, { r: "pulse", d: 0.1, a: 0.12, o: [12, 12] }],
    ["path", { d: "M16.5 7.5l2.9-2.9M7.5 16.5l-2.9 2.9" }, { r: "draw", d: 0.2 }],
  ],
});
