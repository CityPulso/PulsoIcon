import { icon } from "../icon.js";

export const LayoutPanelLeft = icon("LayoutPanelLeft", "layout-panel-left", {
  nodes: [
    ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }, { r: "grow", o: [6.5, 21] }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }, { r: "pop", d: 0.1, o: [17.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }, { r: "pop", d: 0.18, o: [17.5, 17.5] }],
  ],
});
