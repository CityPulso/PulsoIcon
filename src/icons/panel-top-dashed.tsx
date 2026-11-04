import { createIcon } from "../runtime/createIcon.js";

export const PanelTopDashed = createIcon("PanelTopDashed", "panel-top-dashed", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 9h1" }, { r: "growX", d: 0.15, o: [14.5, 9] }],
    ["path", { d: "M19 9h2" }, { r: "growX", d: 0.2, o: [20, 9] }],
    ["path", { d: "M3 9h2" }, { r: "growX", d: 0.05, o: [4, 9] }],
    ["path", { d: "M9 9h1" }, { r: "growX", d: 0.1, o: [9.5, 9] }],
  ],
});
