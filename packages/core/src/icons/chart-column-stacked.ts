import { icon } from "../icon.js";

export const ChartColumnStacked = icon("ChartColumnStacked", "chart-column-stacked", {
  nodes: [
    ["path", { d: "M11 13H7" }, { r: "grow", o: [9, 17] }],
    ["path", { d: "M19 9h-4" }, { r: "grow", d: 0.1, o: [17, 17] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }, { r: "grow", d: 0.1, o: [17, 17] }],
    ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }, { r: "grow", o: [9, 17] }],
  ],
});
