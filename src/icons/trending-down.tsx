import { createIcon } from "../runtime/createIcon.js";

export const TrendingDown = createIcon("TrendingDown", "trending-down", {
  nodes: [
    ["path", { d: "M16 17h6v-6" }, { r: "slide", d: 0.2, x: 1, y: 1, a: 1.5, o: [19, 14] }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7" }, { r: "drawBack", o: [12, 12] }],
  ],
});
