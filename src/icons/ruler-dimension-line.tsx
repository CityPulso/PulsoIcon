import { createIcon } from "../runtime/createIcon.js";

export const RulerDimensionLine = createIcon("RulerDimensionLine", "ruler-dimension-line", {
  nodes: [
    ["path", { d: "M10 15v-3" }, { r: "grow", d: 0.14, o: [10, 13.5] }],
    ["path", { d: "M14 15v-3" }, { r: "grow", d: 0.18, o: [14, 13.5] }],
    ["path", { d: "M18 15v-3" }, { r: "grow", d: 0.22, o: [18, 13.5] }],
    ["path", { d: "M2 8V4" }, { r: "grow", d: 0.15, o: [2, 6] }],
    ["path", { d: "M22 6H2" }, { r: "growX", d: 0.05, o: [12, 6] }],
    ["path", { d: "M22 8V4" }, { r: "grow", d: 0.2, o: [22, 6] }],
    ["path", { d: "M6 15v-3" }, { r: "grow", d: 0.1, o: [6, 13.5] }],
    ["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2" }, { r: "press", a: 0.04, o: [12, 16] }],
  ],
});
