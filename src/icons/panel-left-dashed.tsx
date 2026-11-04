import { createIcon } from "../runtime/createIcon.js";

export const PanelLeftDashed = createIcon("PanelLeftDashed", "panel-left-dashed", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 14v1" }, { r: "grow", d: 0.15, o: [9, 14.5] }],
    ["path", { d: "M9 19v2" }, { r: "grow", d: 0.2, o: [9, 20] }],
    ["path", { d: "M9 3v2" }, { r: "grow", d: 0.05, o: [9, 4] }],
    ["path", { d: "M9 9v1" }, { r: "grow", d: 0.1, o: [9, 9.5] }],
  ],
});
