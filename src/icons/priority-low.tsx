import { createIcon } from "../runtime/createIcon.js";

export const PriorityLow = createIcon("PriorityLow", "priority-low", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 7.5v5" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [12, 12.5] }],
    ["path", { d: "M12 16.5h.01" }, { r: "bounce", d: 0, y: -1, a: 1.5, o: [12, 16.5] }],
  ],
});
