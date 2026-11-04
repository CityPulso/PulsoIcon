import { createIcon } from "../runtime/createIcon.js";

export const ChartNetwork = createIcon("ChartNetwork", "chart-network", {
  nodes: [
    ["path", { d: "m13.11 7.664 1.78 2.672" }, { r: "draw", d: 0.15, o: [15.419, 9.106] }],
    ["path", { d: "m14.162 12.788-3.324 1.424" }, { r: "draw", d: 0.21, o: [15.419, 9.106] }],
    ["path", { d: "m20 4-6.06 1.515" }, { r: "draw", d: 0.27, o: [15.419, 9.106] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
    ["circle", { cx: "12", cy: "6", r: "2" }, { r: "pop", o: [12, 6] }],
    ["circle", { cx: "16", cy: "12", r: "2" }, { r: "pop", d: 0.08, o: [16, 12] }],
    ["circle", { cx: "9", cy: "15", r: "2" }, { r: "pop", d: 0.16, o: [9, 15] }],
  ],
});
