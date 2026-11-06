import { icon } from "../icon.js";

export const PanelRightDashed = icon("PanelRightDashed", "panel-right-dashed", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 14v1" }, { r: "grow", d: 0.15, o: [15, 14.5] }],
    ["path", { d: "M15 19v2" }, { r: "grow", d: 0.2, o: [15, 20] }],
    ["path", { d: "M15 3v2" }, { r: "grow", d: 0.05, o: [15, 4] }],
    ["path", { d: "M15 9v1" }, { r: "grow", d: 0.1, o: [15, 9.5] }],
  ],
});
