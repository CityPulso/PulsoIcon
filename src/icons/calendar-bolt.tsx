import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calendar-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarBolt = createIcon("CalendarBolt", "calendar-bolt", {
  nodes: [
    ["path", { d: "M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker" }],
  ],
});
