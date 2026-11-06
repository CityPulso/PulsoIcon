import { icon } from "../icon.js";

export const ChartBar = icon("ChartBar", "chart-bar", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 16h8" }, { r: "growX", d: 0.16, o: [7, 16] }],
    ["path", { d: "M7 11h12" }, { r: "growX", d: 0.08, o: [7, 11] }],
    ["path", { d: "M7 6h3" }, { r: "growX", o: [7, 6] }],
  ],
});
