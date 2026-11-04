import { createIcon } from "../runtime/createIcon.js";

export const CircleChevronsUp = createIcon("CircleChevronsUp", "circle-chevrons-up", {
  nodes: [
    ["path", { d: "M15 10L12 7L9 10" }, { r: "slide", d: 0.08, y: -1, a: 2, o: [12, 8.5] }],
    ["path", { d: "M15 16L12 13L9 16" }, { r: "slide", y: -1, a: 2, o: [12, 14.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
