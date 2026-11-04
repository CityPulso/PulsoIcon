import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calendar-stats" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarStats = createIcon("CalendarStats", "calendar-stats", {
  nodes: [
    ["path", { d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M18 14v4h4" }, { r: "spin", o: [18, 18] }],
    ["path", { d: "M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "press", a: 0.06, o: [18, 18] }],
    ["path", { d: "M15 3v4" }],
    ["path", { d: "M7 3v4" }],
    ["path", { d: "M3 11h16" }],
  ],
});
