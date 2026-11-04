import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "man" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Man = createIcon("Man", "man", {
  nodes: [
    ["path", { d: "M10 16v5" }],
    ["path", { d: "M14 16v5" }],
    ["path", { d: "M9 9h6l-1 7h-4l-1 -7" }],
    ["path", { d: "M5 11c1.333 -1.333 2.667 -2 4 -2" }, { r: "swing", a: 15, o: [9, 9] }],
    ["path", { d: "M19 11c-1.333 -1.333 -2.667 -2 -4 -2" }, { r: "swing", a: -15, o: [15, 9] }],
    ["path", { d: "M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
  ],
});
