import { createIcon } from "../runtime/createIcon.js";

export const GripHorizontal = createIcon("GripHorizontal", "grip-horizontal", {
  nodes: [
    ["circle", { cx: "12", cy: "9", r: "1" }, { r: "bounce", d: 0.05, y: -1, a: 1, o: [12, 9] }],
    ["circle", { cx: "19", cy: "9", r: "1" }, { r: "bounce", d: 0.1, y: -1, a: 1, o: [19, 9] }],
    ["circle", { cx: "5", cy: "9", r: "1" }, { r: "bounce", y: -1, a: 1, o: [5, 9] }],
    ["circle", { cx: "12", cy: "15", r: "1" }, { r: "bounce", d: 0.13, y: 1, a: 1, o: [12, 15] }],
    ["circle", { cx: "19", cy: "15", r: "1" }, { r: "bounce", d: 0.18, y: 1, a: 1, o: [19, 15] }],
    ["circle", { cx: "5", cy: "15", r: "1" }, { r: "bounce", d: 0.08, y: 1, a: 1, o: [5, 15] }],
  ],
});
