import { createIcon } from "../runtime/createIcon.js";

export const Hd = createIcon("Hd", "hd", {
  nodes: [
    ["path", { d: "M10 12H6" }, { r: "growX", d: 0.2, o: [8, 12] }],
    ["path", { d: "M10 15V9" }, { r: "grow", d: 0.16, o: [10, 12] }],
    ["path", { d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }, { r: "draw", d: 0.25, o: [16, 12] }],
    ["path", { d: "M6 15V9" }, { r: "grow", d: 0.1, o: [6, 12] }],
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
