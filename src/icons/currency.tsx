import { createIcon } from "../runtime/createIcon.js";

export const Currency = createIcon("Currency", "currency", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "flip", o: [12, 12] }],
    ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }, { r: "slide", d: 0.1, x: -1, y: -1, a: 1.5, o: [4.5, 4.5] }],
    ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19.5, 4.5] }],
    ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1.5, o: [4.5, 19.5] }],
    ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [19.5, 19.5] }],
  ],
});
