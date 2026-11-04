import { createIcon } from "../runtime/createIcon.js";

export const CircleChevronsDown = createIcon("CircleChevronsDown", "circle-chevrons-down", {
  nodes: [
    ["path", { d: "M9 14L12 17L15 14" }, { r: "slide", d: 0.08, y: 1, a: 2, o: [12, 15.5] }],
    ["path", { d: "M9 8L12 11L15 8" }, { r: "slide", y: 1, a: 2, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
