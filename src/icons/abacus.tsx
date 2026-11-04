import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "abacus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Abacus = createIcon("Abacus", "abacus", {
  nodes: [
    ["path", { d: "M5 3v18" }],
    ["path", { d: "M19 21v-18" }],
    ["path", { d: "M5 7h14" }],
    ["path", { d: "M5 15h14" }],
    ["path", { d: "M8 13v4" }, { r: "slide", d: 0.15, x: -1, y: 0, a: 2 }],
    ["path", { d: "M11 13v4" }, { r: "slide", d: 0.2, x: -1, y: 0, a: 2 }],
    ["path", { d: "M16 13v4" }, { r: "slide", d: 0.25, x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M14 5v4" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
    ["path", { d: "M11 5v4" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 2 }],
    ["path", { d: "M8 5v4" }, { r: "slide", x: 1, y: 0, a: 2 }],
    ["path", { d: "M3 21h18" }],
  ],
});
