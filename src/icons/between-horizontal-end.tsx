import { createIcon } from "../runtime/createIcon.js";

export const BetweenHorizontalEnd = createIcon("BetweenHorizontalEnd", "between-horizontal-end", {
  nodes: [
    ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }, { r: "slide", y: -1, a: 1.5, o: [9.5, 6.5] }],
    ["path", { d: "m22 15-3-3 3-3" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [20.5, 12] }],
    ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }, { r: "slide", y: 1, a: 1.5, o: [9.5, 17.5] }],
  ],
});
