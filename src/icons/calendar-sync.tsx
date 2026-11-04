import { createIcon } from "../runtime/createIcon.js";

export const CalendarSync = createIcon("CalendarSync", "calendar-sync", {
  nodes: [
    ["path", { d: "M11 10v4h4" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "m11 14 1.535-1.605a5 5 0 018 1.5" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "m21 18-1.535 1.605a5 5 0 01-8-1.5" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "M21 22v-4h-4" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
