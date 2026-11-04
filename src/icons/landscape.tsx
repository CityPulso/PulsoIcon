import { createIcon } from "../runtime/createIcon.js";

export const Landscape = createIcon("Landscape", "landscape", {
  nodes: [
    ["circle", { cx: "17", cy: "6", r: "2.5" }, { r: "rise", d: 0.1, a: 3, o: [17, 6] }],
    ["path", { d: "M2 20 8.5 9l4.5 7.5 2.5-3.5L22 20z" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
