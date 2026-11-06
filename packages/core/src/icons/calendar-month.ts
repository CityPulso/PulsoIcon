import { icon } from "../icon.js";

// Adapted from Tabler Icons "calendar-month" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarMonth = icon("CalendarMonth", "calendar-month", {
  nodes: [
    ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M8 14v4" }, { r: "grow", o: [8, 18] }],
    ["path", { d: "M12 14v4" }, { r: "grow", d: 0.1, o: [12, 18] }],
    ["path", { d: "M16 14v4" }, { r: "grow", d: 0.2, o: [16, 18] }],
  ],
});
