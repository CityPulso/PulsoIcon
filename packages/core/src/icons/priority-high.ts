import { icon } from "../icon.js";

export const PriorityHigh = icon("PriorityHigh", "priority-high", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 7.5v5" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [8, 12.5] }],
    ["path", { d: "M8 16.5h.01" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [8, 16.5] }],
    ["path", { d: "M12 7.5v5" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [12, 12.5] }],
    ["path", { d: "M12 16.5h.01" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [12, 16.5] }],
    ["path", { d: "M16 7.5v5" }, { r: "bounce", d: 0.16, y: -1, a: 1.5, o: [16, 12.5] }],
    ["path", { d: "M16 16.5h.01" }, { r: "bounce", d: 0.16, y: -1, a: 1.5, o: [16, 16.5] }],
  ],
});
