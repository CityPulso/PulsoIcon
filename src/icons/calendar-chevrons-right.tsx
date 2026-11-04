import { createIcon } from "../runtime/createIcon.js";

export const CalendarChevronsRight = createIcon("CalendarChevronsRight", "calendar-chevrons-right", {
  nodes: [
    ["path", { d: "m13 21 3-3-3-3" }, { r: "slide", d: 0.15, x: 1, a: 2, o: [17.5, 18] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "m19 21 3-3-3-3" }, { r: "slide", d: 0.15, x: 1, a: 2, o: [17.5, 18] }],
    ["path", { d: "M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
