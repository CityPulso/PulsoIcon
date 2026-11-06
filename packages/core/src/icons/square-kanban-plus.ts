import { icon } from "../icon.js";

export const SquareKanbanPlus = icon("SquareKanbanPlus", "square-kanban-plus", {
  nodes: [
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.11, o: [12, 9] }],
    ["path", { d: "M12.354 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7.354" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 18h6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
    ["path", { d: "M16 7v4.536" }, { r: "grow", d: 0.17, o: [16, 9.268] }],
    ["path", { d: "M18 21v-6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
    ["path", { d: "M8 7v7" }, { r: "grow", d: 0.05, o: [8, 10.5] }],
  ],
});
