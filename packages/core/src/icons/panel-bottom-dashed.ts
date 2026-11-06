import { icon } from "../icon.js";

export const PanelBottomDashed = icon("PanelBottomDashed", "panel-bottom-dashed", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 15h1" }, { r: "growX", d: 0.15, o: [14.5, 15] }],
    ["path", { d: "M19 15h2" }, { r: "growX", d: 0.2, o: [20, 15] }],
    ["path", { d: "M3 15h2" }, { r: "growX", d: 0.05, o: [4, 15] }],
    ["path", { d: "M9 15h1" }, { r: "growX", d: 0.1, o: [9.5, 15] }],
  ],
});
