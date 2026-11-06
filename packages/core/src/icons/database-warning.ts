import { icon } from "../icon.js";

export const DatabaseWarning = icon("DatabaseWarning", "database-warning", {
  nodes: [
    ["path", { d: "M21 10.5V5" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 12a9 3 0 0 0 7.599 2.963" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 5v14a9 3 0 0 0 8.148 2.987" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
    ["path", { d: "M17.13 14.5a1 1 0 0 1 1.74 0l3 5.25a1 1 0 0 1-.87 1.5h-6a1 1 0 0 1-.87-1.5z" }, { r: "shake", d: 0.1, a: 0.8, o: [18, 18] }],
    ["path", { d: "M18 17v1" }, { r: "pop", d: 0.25, o: [18, 17.5] }],
  ],
});
