import { icon } from "../icon.js";

export const PanelTopBottomDashed = icon("PanelTopBottomDashed", "panel-top-bottom-dashed", {
  nodes: [
    ["path", { d: "M14 15h1" }, { r: "growX", d: 0.18, o: [14.5, 15] }],
    ["path", { d: "M14 9h1" }, { r: "growX", d: 0.13, o: [14.5, 9] }],
    ["path", { d: "M19 15h2" }, { r: "growX", d: 0.22, o: [20, 15] }],
    ["path", { d: "M19 9h2" }, { r: "growX", d: 0.17, o: [20, 9] }],
    ["path", { d: "M3 15h2" }, { r: "growX", d: 0.1, o: [4, 15] }],
    ["path", { d: "M3 9h2" }, { r: "growX", d: 0.05, o: [4, 9] }],
    ["path", { d: "M9 15h1" }, { r: "growX", d: 0.14, o: [9.5, 15] }],
    ["path", { d: "M9 9h1" }, { r: "growX", d: 0.09, o: [9.5, 9] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
