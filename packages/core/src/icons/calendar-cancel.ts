import { icon } from "../icon.js";

// Adapted from Tabler Icons "calendar-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarCancel = icon("CalendarCancel", "calendar-cancel", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
