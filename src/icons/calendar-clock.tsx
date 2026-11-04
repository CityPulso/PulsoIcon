import { createIcon } from "../runtime/createIcon.js";

export const CalendarClock = createIcon("CalendarClock", "calendar-clock", {
  nodes: [
    ["path", { d: "M16 14v2.2l1.6 1" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h5.859" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["circle", { cx: "16", cy: "16", r: "6" }, { r: "pulse", d: 0.1, a: 0.06, o: [16, 16] }],
  ],
});
