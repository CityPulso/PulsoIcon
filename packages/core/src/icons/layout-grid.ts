import { icon } from "../icon.js";

export const LayoutGrid = icon("LayoutGrid", "layout-grid", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "pop", o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }, { r: "pop", d: 0.06, o: [17.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }, { r: "pop", d: 0.12, o: [17.5, 17.5] }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }, { r: "pop", d: 0.18, o: [6.5, 17.5] }],
  ],
});
