import { icon } from "../icon.js";

export const SquareChartGantt = icon("SquareChartGantt", "square-chart-gantt", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 8h7" }, { r: "growX", d: 0.05, o: [9, 8] }],
    ["path", { d: "M8 12h6" }, { r: "growX", d: 0.12, o: [8, 12] }],
    ["path", { d: "M11 16h5" }, { r: "growX", d: 0.19, o: [11, 16] }],
  ],
});
