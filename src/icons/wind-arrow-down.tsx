import { createIcon } from "../runtime/createIcon.js";

export const WindArrowDown = createIcon("WindArrowDown", "wind-arrow-down", {
  nodes: [
    ["path", { d: "M10 2v8" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [10, 6] }],
    ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2" }, { r: "slide", x: 1, a: 1.5, o: [9, 20] }],
    ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [12, 11.5] }],
    ["path", { d: "m6 6 4 4 4-4" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [10, 6] }],
  ],
});
