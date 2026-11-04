import { createIcon } from "../runtime/createIcon.js";

export const ChartScatter = createIcon("ChartScatter", "chart-scatter", {
  nodes: [
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "pop", o: [7.5, 7.5] }],
    ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.06, o: [18.5, 5.5] }],
    ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.12, o: [11.5, 11.5] }],
    ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.18, o: [7.5, 16.5] }],
    ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.24, o: [17.5, 14.5] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
  ],
});
