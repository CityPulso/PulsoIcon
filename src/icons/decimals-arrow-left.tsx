import { createIcon } from "../runtime/createIcon.js";

export const DecimalsArrowLeft = createIcon("DecimalsArrowLeft", "decimals-arrow-left", {
  nodes: [
    ["path", { d: "m13 21-3-3 3-3" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [15, 18] }],
    ["path", { d: "M20 18H10" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [15, 18] }],
    ["path", { d: "M3 11h.01" }, { r: "pop", d: 0.1, o: [3.005, 11] }],
    ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5" }, { r: "slide", x: -1, a: 1.5, o: [8.5, 7] }],
  ],
});
