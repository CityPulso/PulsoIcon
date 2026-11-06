import { icon } from "../icon.js";

export const SquareChartColumnSparkle = icon("SquareChartColumnSparkle", "square-chart-column-sparkle", {
  nodes: [
    ["path", { d: "M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M8 17v-3" }, { r: "grow", o: [8, 17] }],
    ["path", { d: "M12 17v-7" }, { r: "grow", d: 0.08, o: [12, 17] }],
    ["path", { d: "M16 17v-3" }, { r: "grow", d: 0.16, o: [16, 17] }],
    ["path", { d: "M18 2c.5 2.5 1.5 3.5 4 4-2.5.5-3.5 1.5-4 4-.5-2.5-1.5-3.5-4-4 2.5-.5 3.5-1.5 4-4z" }, { r: "twinkle", d: 0.2, o: [18, 6] }],
  ],
});
