import { icon } from "../icon.js";

export const ChartBarStacked = icon("ChartBarStacked", "chart-bar-stacked", {
  nodes: [
    ["path", { d: "M11 13v4" }, { r: "growX", o: [7, 15] }],
    ["path", { d: "M15 5v4" }, { r: "growX", d: 0.1, o: [7, 7] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }, { r: "growX", o: [7, 15] }],
    ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }, { r: "growX", d: 0.1, o: [7, 7] }],
  ],
});
