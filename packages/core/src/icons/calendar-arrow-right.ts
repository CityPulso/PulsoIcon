import { icon } from "../icon.js";

export const CalendarArrowRight = icon("CalendarArrowRight", "calendar-arrow-right", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "m18 21 3-3h-6" }, { r: "bounce", d: 0.15, x: 1, a: 2, o: [18, 18] }],
    ["path", { d: "M21 12.34V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.35" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m21 18-3-3" }, { r: "bounce", d: 0.15, x: 1, a: 2, o: [18, 18] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
