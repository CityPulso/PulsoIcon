import { icon } from "../icon.js";

export const PriorityMedium = icon("PriorityMedium", "priority-medium", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9.5 7.5v5" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [9.5, 12.5] }],
    ["path", { d: "M9.5 16.5h.01" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [9.5, 16.5] }],
    ["path", { d: "M14.5 7.5v5" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [14.5, 12.5] }],
    ["path", { d: "M14.5 16.5h.01" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [14.5, 16.5] }],
  ],
});
