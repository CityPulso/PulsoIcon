import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calendar-dot" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalendarDot = createIcon("CalendarDot", "calendar-dot", {
  nodes: [
    ["path", { d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" }],
    ["path", { d: "M16 3v4" }],
    ["path", { d: "M8 3v4" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", a: 0.25, o: [19, 19] }],
  ],
  solid: [
    ["path", { d: "M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" }],
    ["path", { d: "M16 3v4" }, undefined, "line"],
    ["path", { d: "M8 3v4" }, undefined, "line"],
    ["path", { d: "M4 11h16" }, undefined, "cut"],
    ["circle", { cx: "19", cy: "19", r: "5" }, { r: "pulse", a: 0.25, o: [19, 19] }, "cut"],
    ["circle", { cx: "19", cy: "19", r: "3" }, { r: "pulse", a: 0.25, o: [19, 19] }],
  ],
});
