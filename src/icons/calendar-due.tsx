import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calendar-due" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarDue = createIcon("CalendarDue", "calendar-due", {
  nodes: [
    ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", o: [12, 16] }],
  ],
});
