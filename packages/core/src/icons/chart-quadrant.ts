import { icon } from "../icon.js";

export const ChartQuadrant = icon("ChartQuadrant", "chart-quadrant", {
  nodes: [
    ["path", { d: "M13 3v18" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M3 12h18" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M3 3v16a2 2 0 002 2h16" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["circle", { cx: "17.5", cy: "5.5", r: "0.5", fill: "currentColor" }, { r: "pop", o: [17.5, 5.5] }],
    ["circle", { cx: "19.5", cy: "16.5", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.08, o: [19.5, 16.5] }],
    ["circle", { cx: "7.5", cy: "16.5", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.16, o: [7.5, 16.5] }],
    ["circle", { cx: "7.5", cy: "7.5", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.24, o: [7.5, 7.5] }],
  ],
});
