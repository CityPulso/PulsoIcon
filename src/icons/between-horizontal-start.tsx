import { createIcon } from "../runtime/createIcon.js";

export const BetweenHorizontalStart = createIcon("BetweenHorizontalStart", "between-horizontal-start", {
  nodes: [
    ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }, { r: "slide", y: -1, a: 1.5, o: [14.5, 6.5] }],
    ["path", { d: "m2 9 3 3-3 3" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [3.5, 12] }],
    ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }, { r: "slide", y: 1, a: 1.5, o: [14.5, 17.5] }],
  ],
});
