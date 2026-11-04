import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pennant-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PennantOff = createIcon("PennantOff", "pennant-off", {
  nodes: [
    ["path", { d: "M8 21h4" }],
    ["path", { d: "M10 21v-11m0 -4v-3" }],
    ["path", { d: "M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" }, { r: "swing", a: 6, o: [10, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
