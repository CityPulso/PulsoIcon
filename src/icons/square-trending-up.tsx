import { createIcon } from "../runtime/createIcon.js";

export const SquareTrendingUp = createIcon("SquareTrendingUp", "square-trending-up", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m7 15 3.5-3.5 2.5 2.5 4-4" }, { r: "draw" }],
    ["path", { d: "M14 10h3v3" }, { r: "slide", d: 0.2, x: 1, y: -1, a: 1.5, o: [15.5, 11.5] }],
  ],
});
