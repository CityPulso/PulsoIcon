import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagX = createIcon("FlagX", "flag-x", {
  nodes: [
    ["path", { d: "M13.533 15.028a4.988 4.988 0 0 1 -1.533 -1.028a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.25 }],
  ],
});
