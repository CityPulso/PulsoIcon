import { createIcon } from "../runtime/createIcon.js";

export const CalendarArrowLeft = createIcon("CalendarArrowLeft", "calendar-arrow-left", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M21 9H3" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 12.34V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-7.35" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 18h6" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [6, 18] }],
    ["path", { d: "m6 21-3-3 3-3" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [6, 18] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
