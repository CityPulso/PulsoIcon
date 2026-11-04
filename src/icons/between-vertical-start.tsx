import { createIcon } from "../runtime/createIcon.js";

export const BetweenVerticalStart = createIcon("BetweenVerticalStart", "between-vertical-start", {
  nodes: [
    ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }, { r: "slide", x: -1, a: 1.5, o: [6.5, 14.5] }],
    ["path", { d: "m15 2-3 3-3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 3.5] }],
    ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }, { r: "slide", x: 1, a: 1.5, o: [17.5, 14.5] }],
  ],
});
