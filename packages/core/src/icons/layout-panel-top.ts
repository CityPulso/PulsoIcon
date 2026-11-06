import { icon } from "../icon.js";

export const LayoutPanelTop = icon("LayoutPanelTop", "layout-panel-top", {
  nodes: [
    ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }, { r: "growX", o: [3, 6.5] }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }, { r: "pop", d: 0.1, o: [6.5, 17.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }, { r: "pop", d: 0.18, o: [17.5, 17.5] }],
  ],
});
