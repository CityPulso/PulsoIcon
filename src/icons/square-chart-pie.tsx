import { createIcon } from "../runtime/createIcon.js";

export const SquareChartPie = createIcon("SquareChartPie", "square-chart-pie", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M16 13a5 5 0 1 1-5-5v5z" }, { r: "spin", d: 0.05, a: -20, o: [11, 13] }],
    ["path", { d: "M14 6a4 4 0 0 1 4 4h-4z" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1, o: [16, 8] }],
  ],
});
