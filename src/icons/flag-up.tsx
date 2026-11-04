import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagUp = createIcon("FlagUp", "flag-up", {
  nodes: [
    ["path", { d: "M14.138 15.241a4.979 4.979 0 0 1 -2.138 -1.241a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
