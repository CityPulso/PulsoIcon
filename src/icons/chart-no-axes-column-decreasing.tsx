import { createIcon } from "../runtime/createIcon.js";

export const ChartNoAxesColumnDecreasing = createIcon("ChartNoAxesColumnDecreasing", "chart-no-axes-column-decreasing", {
  nodes: [
    ["path", { d: "M5 21V3" }, { r: "grow", o: [5, 21] }],
    ["path", { d: "M12 21V9" }, { r: "grow", d: 0.08, o: [12, 21] }],
    ["path", { d: "M19 21v-6" }, { r: "grow", d: 0.16, o: [19, 21] }],
  ],
});
