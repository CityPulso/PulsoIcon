import { icon } from "../icon.js";

export const CalendarSearch = icon("CalendarSearch", "calendar-search", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m22 21-1.875-1.875" }, { r: "swing", d: 0.1, a: 15, o: [18, 17] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["circle", { cx: "18", cy: "17", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [18, 17] }],
  ],
});
