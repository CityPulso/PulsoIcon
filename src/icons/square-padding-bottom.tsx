import { createIcon } from "../runtime/createIcon.js";

export const SquarePaddingBottom = createIcon("SquarePaddingBottom", "square-padding-bottom", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 17h8" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 17] }],
  ],
});
