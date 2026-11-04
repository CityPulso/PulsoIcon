import { createIcon } from "../runtime/createIcon.js";

export const SquareChartColumn = createIcon("SquareChartColumn", "square-chart-column", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M8 17v-4" }, { r: "grow", o: [8, 17] }],
    ["path", { d: "M12 17V7" }, { r: "grow", d: 0.08, o: [12, 17] }],
    ["path", { d: "M16 17v-6" }, { r: "grow", d: 0.16, o: [16, 17] }],
  ],
});
