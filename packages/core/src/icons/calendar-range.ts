import { icon } from "../icon.js";

export const CalendarRange = icon("CalendarRange", "calendar-range", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["path", { d: "M17 13h-6" }, { r: "growX", d: 0.15, o: [14, 13] }],
    ["path", { d: "M13 17H7" }, { r: "growX", d: 0.23, o: [10, 17] }],
    ["path", { d: "M7 13h.01" }, { r: "pop", d: 0.3, o: [7.005, 13] }],
    ["path", { d: "M17 17h.01" }, { r: "pop", d: 0.36, o: [17.005, 17] }],
  ],
});
