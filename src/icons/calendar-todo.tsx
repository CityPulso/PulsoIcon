import { createIcon } from "../runtime/createIcon.js";

export const CalendarTodo = createIcon("CalendarTodo", "calendar-todo", {
  nodes: [
    ["path", { d: "M8 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m7 14 1.5 1.5 3-3" }, { r: "draw", d: 0.15, o: [9, 14] }],
    ["path", { d: "M14 14h3" }, { r: "growX", d: 0.25, o: [14, 14] }],
    ["path", { d: "M8.5 18h.01" }, { r: "pop", d: 0.3, o: [8.5, 18] }],
    ["path", { d: "M14 18h3" }, { r: "growX", d: 0.35, o: [14, 18] }],
  ],
});
