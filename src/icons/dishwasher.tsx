import { createIcon } from "../runtime/createIcon.js";

export const Dishwasher = createIcon("Dishwasher", "dishwasher", {
  nodes: [
    ["rect", { x: "3", y: "2", width: "18", height: "20", rx: "2" }, { r: "shake", a: 0.5, o: [12, 12] }],
    ["path", { d: "M3 7h18" }, { r: "shake", a: 0.5, o: [12, 12] }],
    ["path", { d: "M7 4.5h.01" }, { r: "shake", a: 0.5, o: [12, 12] }],
    ["path", { d: "M10 4.5h.01" }, { r: "shake", a: 0.5, o: [12, 12] }],
    ["path", { d: "M9 10h6" }, { r: "shake", a: 0.5, o: [12, 12] }],
    ["circle", { cx: "10", cy: "16.5", r: "2" }, { r: "float", d: 0.1, a: 1.5, o: [10, 16.5] }],
    ["path", { d: "M15 14h.01" }, { r: "float", d: 0.2, a: 1.5, o: [15, 14] }],
    ["path", { d: "M15.5 18h.01" }, { r: "float", d: 0.25, a: 1.5, o: [15.5, 18] }],
  ],
});
