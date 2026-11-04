import { createIcon } from "../runtime/createIcon.js";

export const LayoutArrowDown = createIcon("LayoutArrowDown", "layout-arrow-down", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "slide", y: 1, a: 1, o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }, { r: "slide", d: 0.06, y: 1, a: 1, o: [6.5, 17.5] }],
    ["path", { d: "M18 3v18" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [18, 12] }],
    ["path", { d: "m21 18-3 3-3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [18, 12] }],
  ],
});
