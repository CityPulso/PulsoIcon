import { icon } from "../icon.js";

export const GripVertical = icon("GripVertical", "grip-vertical", {
  nodes: [
    ["circle", { cx: "9", cy: "12", r: "1" }, { r: "bounce", d: 0.05, x: -1, a: 1, o: [9, 12] }],
    ["circle", { cx: "9", cy: "5", r: "1" }, { r: "bounce", x: -1, a: 1, o: [9, 5] }],
    ["circle", { cx: "9", cy: "19", r: "1" }, { r: "bounce", d: 0.1, x: -1, a: 1, o: [9, 19] }],
    ["circle", { cx: "15", cy: "12", r: "1" }, { r: "bounce", d: 0.13, x: 1, a: 1, o: [15, 12] }],
    ["circle", { cx: "15", cy: "5", r: "1" }, { r: "bounce", d: 0.08, x: 1, a: 1, o: [15, 5] }],
    ["circle", { cx: "15", cy: "19", r: "1" }, { r: "bounce", d: 0.18, x: 1, a: 1, o: [15, 19] }],
  ],
});
