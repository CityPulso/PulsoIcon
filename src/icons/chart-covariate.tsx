import { createIcon } from "../runtime/createIcon.js";

export const ChartCovariate = createIcon("ChartCovariate", "chart-covariate", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 17 19 6" }, { r: "draw", d: 0.25, o: [13, 11.5] }],
    ["circle", { cx: "8", cy: "12", r: "1" }, { r: "pop", o: [8, 12] }],
    ["circle", { cx: "11", cy: "15", r: "1" }, { r: "pop", d: 0.05, o: [11, 15] }],
    ["circle", { cx: "13", cy: "9", r: "1" }, { r: "pop", d: 0.1, o: [13, 9] }],
    ["circle", { cx: "16", cy: "12", r: "1" }, { r: "pop", d: 0.15, o: [16, 12] }],
    ["circle", { cx: "18", cy: "15", r: "1" }, { r: "pop", d: 0.2, o: [18, 15] }],
  ],
});
