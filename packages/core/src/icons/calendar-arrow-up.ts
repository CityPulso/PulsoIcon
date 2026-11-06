import { icon } from "../icon.js";

export const CalendarArrowUp = icon("CalendarArrowUp", "calendar-arrow-up", {
  nodes: [
    ["path", { d: "m14 17 4-4 4 4" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 17] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M18 21v-8" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 17] }],
    ["path", { d: "M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
