import { icon } from "../icon.js";

export const ChartFunnel = icon("ChartFunnel", "chart-funnel", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "4", rx: "1" }, { r: "growX", o: [12, 5] }],
    ["rect", { x: "6", y: "10", width: "12", height: "4", rx: "1" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["rect", { x: "9", y: "17", width: "6", height: "4", rx: "1" }, { r: "growX", d: 0.2, o: [12, 19] }],
  ],
});
