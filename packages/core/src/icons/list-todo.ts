import { icon } from "../icon.js";

export const ListTodo = icon("ListTodo", "list-todo", {
  nodes: [
    ["path", { d: "M13 5h8" }, { r: "growX", d: 0.15, o: [13, 12] }],
    ["path", { d: "M13 12h8" }, { r: "growX", d: 0.2, o: [13, 12] }],
    ["path", { d: "M13 19h8" }, { r: "growX", d: 0.25, o: [13, 12] }],
    ["path", { d: "m3 17 2 2 4-4" }, { r: "draw", d: 0.1, o: [6, 17] }],
    ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1" }, { r: "press", a: 0.1, o: [6, 7] }],
  ],
});
