import { icon } from "../icon.js";

export const ChartGantt = icon("ChartGantt", "chart-gantt", {
  nodes: [
    ["path", { d: "M10 6h8" }, { r: "growX", o: [10, 6] }],
    ["path", { d: "M12 16h6" }, { r: "growX", d: 0.2, o: [12, 16] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M8 11h7" }, { r: "growX", d: 0.1, o: [8, 11] }],
  ],
});
