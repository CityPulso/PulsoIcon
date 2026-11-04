import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calendar-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarUp = createIcon("CalendarUp", "calendar-up", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", y: -1, a: 2 }],
  ],
});
