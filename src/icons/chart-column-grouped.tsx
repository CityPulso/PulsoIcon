import { createIcon } from "../runtime/createIcon.js";

export const ChartColumnGrouped = createIcon("ChartColumnGrouped", "chart-column-grouped", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 17v-5" }, { r: "grow", o: [7, 17] }],
    ["path", { d: "M10 17V8" }, { r: "grow", d: 0.06, o: [10, 17] }],
    ["path", { d: "M15 17v-3" }, { r: "grow", d: 0.12, o: [15, 17] }],
    ["path", { d: "M18 17V6" }, { r: "grow", d: 0.18, o: [18, 17] }],
  ],
});
