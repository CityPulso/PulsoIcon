import { icon } from "../icon.js";

export const PanelLeftRightDashed = icon("PanelLeftRightDashed", "panel-left-right-dashed", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "grow", d: 0.14, o: [15, 9.5] }],
    ["path", { d: "M15 15v-1" }, { r: "grow", d: 0.18, o: [15, 14.5] }],
    ["path", { d: "M15 21v-2" }, { r: "grow", d: 0.22, o: [15, 20] }],
    ["path", { d: "M15 5V3" }, { r: "grow", d: 0.1, o: [15, 4] }],
    ["path", { d: "M9 10V9" }, { r: "grow", d: 0.09, o: [9, 9.5] }],
    ["path", { d: "M9 15v-1" }, { r: "grow", d: 0.13, o: [9, 14.5] }],
    ["path", { d: "M9 21v-2" }, { r: "grow", d: 0.17, o: [9, 20] }],
    ["path", { d: "M9 5V3" }, { r: "grow", d: 0.05, o: [9, 4] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
