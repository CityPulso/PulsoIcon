import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagDown = createIcon("FlagDown", "flag-down", {
  nodes: [
    ["path", { d: "M14.434 15.315a4.978 4.978 0 0 1 -2.434 -1.315a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
