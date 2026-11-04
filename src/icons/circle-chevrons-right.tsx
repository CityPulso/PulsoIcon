import { createIcon } from "../runtime/createIcon.js";

export const CircleChevronsRight = createIcon("CircleChevronsRight", "circle-chevrons-right", {
  nodes: [
    ["path", { d: "M14 15L17 12L14 9" }, { r: "slide", d: 0.08, x: 1, a: 2, o: [15.5, 12] }],
    ["path", { d: "M8 15L11 12L8 9" }, { r: "slide", x: 1, a: 2, o: [9.5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
