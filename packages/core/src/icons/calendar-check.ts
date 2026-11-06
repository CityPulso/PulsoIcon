import { icon } from "../icon.js";

export const CalendarCheck = icon("CalendarCheck", "calendar-check", {
  nodes: [
    ["path", { d: "M8 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m9 15 2 2 4-4" }, { r: "draw", d: 0.15, o: [12, 15] }],
  ],
});
