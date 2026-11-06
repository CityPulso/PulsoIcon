import { icon } from "../icon.js";

export const CalendarOff = icon("CalendarOff", "calendar-off", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M21 9h-5.5" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "M3 9h6" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "M8.656 3H19a2 2 0 012 2v10.344" }, { r: "press", a: 0.05, o: [12, 11.5] }],
  ],
  solid: [
    ["path", { d: "M8 2v3" }, { r: "press", a: 0.05, o: [12, 11.5] }, "line"],
    ["path", { d: "M16 2v3" }, { r: "press", a: 0.05, o: [12, 11.5] }, "line"],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 11.5] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
