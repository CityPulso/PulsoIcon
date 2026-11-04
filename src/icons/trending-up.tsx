import { createIcon } from "../runtime/createIcon.js";

export const TrendingUp = createIcon("TrendingUp", "trending-up", {
  nodes: [
    ["path", { d: "M16 7h6v6" }, { r: "slide", d: 0.2, x: 1, y: -1, a: 1.5, o: [19, 10] }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }, { r: "draw", o: [12, 12] }],
  ],
});
