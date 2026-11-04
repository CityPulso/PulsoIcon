import { createIcon } from "../runtime/createIcon.js";

export const LayoutArrowRight = createIcon("LayoutArrowRight", "layout-arrow-right", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "slide", x: 1, a: 1, o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }, { r: "slide", d: 0.06, x: 1, a: 1, o: [17.5, 6.5] }],
    ["path", { d: "M3 18h18" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [12, 18] }],
    ["path", { d: "m18 21 3-3-3-3" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [12, 18] }],
  ],
});
