import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagCode = createIcon("FlagCode", "flag-code", {
  nodes: [
    ["path", { d: "M13.41 14.973a4.991 4.991 0 0 1 -1.41 -.973a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1 }],
  ],
});
