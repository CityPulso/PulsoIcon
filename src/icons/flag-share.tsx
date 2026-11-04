import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagShare = createIcon("FlagShare", "flag-share", {
  nodes: [
    ["path", { d: "M13.13 14.833a5.002 5.002 0 0 1 -1.13 -.833a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
  ],
});
