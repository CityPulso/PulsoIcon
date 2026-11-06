import { icon } from "../icon.js";

export const CalendarMinus = icon("CalendarMinus", "calendar-minus", {
  nodes: [
    ["path", { d: "M16 18h6" }, { r: "growX", d: 0.15, o: [19, 18] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
