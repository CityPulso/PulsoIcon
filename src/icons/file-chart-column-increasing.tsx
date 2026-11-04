import { createIcon } from "../runtime/createIcon.js";

export const FileChartColumnIncreasing = createIcon("FileChartColumnIncreasing", "file-chart-column-increasing", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 18v-2" }, { r: "grow", d: 0.1, o: [8, 18] }],
    ["path", { d: "M12 18v-4" }, { r: "grow", d: 0.18, o: [12, 18] }],
    ["path", { d: "M16 18v-6" }, { r: "grow", d: 0.26, o: [16, 18] }],
  ],
});
