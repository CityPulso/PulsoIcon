import { createIcon } from "../runtime/createIcon.js";

export const ChartColumnIncreasing = createIcon("ChartColumnIncreasing", "chart-column-increasing", {
  nodes: [
    ["path", { d: "M13 17V9" }, { r: "grow", d: 0.08, o: [13, 17] }],
    ["path", { d: "M18 17V5" }, { r: "grow", d: 0.16, o: [18, 17] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M8 17v-3" }, { r: "grow", o: [8, 17] }],
  ],
});
