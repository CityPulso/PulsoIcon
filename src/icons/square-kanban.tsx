import { createIcon } from "../runtime/createIcon.js";

export const SquareKanban = createIcon("SquareKanban", "square-kanban", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 7v7" }, { r: "grow", d: 0.05, o: [8, 7] }],
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.1, o: [12, 7] }],
    ["path", { d: "M16 7v9" }, { r: "grow", d: 0.15, o: [16, 7] }],
  ],
});
