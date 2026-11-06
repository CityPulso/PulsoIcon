import { icon } from "../icon.js";

export const CalendarX2 = icon("CalendarX2", "calendar-x-2", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "m17 16 5 5" }, { r: "draw", d: 0.15, o: [19.5, 18.5] }],
    ["path", { d: "m17 21 5-5" }, { r: "draw", d: 0.25, o: [19.5, 18.5] }],
    ["path", { d: "M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
