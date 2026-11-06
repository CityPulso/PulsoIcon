import { icon } from "../icon.js";

// Adapted from Tabler Icons "calendar-week" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarWeek = icon("CalendarWeek", "calendar-week", {
  nodes: [
    ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M7 14h.013" }, { r: "pop", d: 0.0, o: [7, 14] }],
    ["path", { d: "M10.01 14h.005" }, { r: "pop", d: 0.04, o: [10, 14] }],
    ["path", { d: "M13.01 14h.005" }, { r: "pop", d: 0.08, o: [13, 14] }],
    ["path", { d: "M16.015 14h.005" }, { r: "pop", d: 0.12, o: [16, 14] }],
    ["path", { d: "M13.015 17h.005" }, { r: "pop", d: 0.24, o: [13, 17] }],
    ["path", { d: "M7.01 17h.005" }, { r: "pop", d: 0.16, o: [7, 17] }],
    ["path", { d: "M10.01 17h.005" }, { r: "pop", d: 0.2, o: [10, 17] }],
  ],
});
