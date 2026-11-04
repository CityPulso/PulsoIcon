import { createIcon } from "../runtime/createIcon.js";

export const ChartBarIncreasing = createIcon("ChartBarIncreasing", "chart-bar-increasing", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 11h8" }, { r: "growX", d: 0.08, o: [7, 11] }],
    ["path", { d: "M7 16h12" }, { r: "growX", d: 0.16, o: [7, 16] }],
    ["path", { d: "M7 6h3" }, { r: "growX", o: [7, 6] }],
  ],
});
