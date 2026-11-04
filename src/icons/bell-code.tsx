import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellCode = createIcon("BellCode", "bell-code", {
  nodes: [
    ["path", { d: "M11.5 17h-7.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 2.498 2.958" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
  ],
});
