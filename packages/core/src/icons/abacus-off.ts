import { icon } from "../icon.js";

// Adapted from Tabler Icons "abacus-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AbacusOff = icon("AbacusOff", "abacus-off", {
  nodes: [
    ["path", { d: "M5 5v16" }],
    ["path", { d: "M19 21v-2m0 -4v-12" }],
    ["path", { d: "M5 7h2m4 0h8" }],
    ["path", { d: "M5 15h10" }],
    ["path", { d: "M8 13v4" }, { r: "slide", x: 1, a: 1.5, o: [8, 15] }],
    ["path", { d: "M11 13v4" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [11, 15] }],
    ["path", { d: "M16 16v1" }, { r: "slide", d: 0.2, x: -1, a: 1, o: [16, 16.5] }],
    ["path", { d: "M14 5v4" }, { r: "slide", x: -1, a: 1.5, o: [14, 7] }],
    ["path", { d: "M11 5v2" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [11, 6] }],
    ["path", { d: "M8 8v1" }, { r: "slide", d: 0.2, x: 1, a: 1, o: [8, 8.5] }],
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M5 3v18", fill: "none" }],
    ["path", { d: "M19 21v-18", fill: "none" }],
    ["path", { d: "M5 7h14", fill: "none" }],
    ["path", { d: "M5 15h14", fill: "none" }],
    ["path", { d: "M8 13v4", fill: "none" }, { r: "slide", x: 1, a: 1.5, o: [8, 15] }],
    ["path", { d: "M11 13v4", fill: "none" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [11, 15] }],
    ["path", { d: "M16 13v4", fill: "none" }, { r: "slide", d: 0.2, x: -1, a: 1, o: [16, 16.5] }],
    ["path", { d: "M14 5v4", fill: "none" }, { r: "slide", x: -1, a: 1.5, o: [14, 7] }],
    ["path", { d: "M11 5v4", fill: "none" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [11, 6] }],
    ["path", { d: "M8 5v4", fill: "none" }, { r: "slide", d: 0.2, x: 1, a: 1, o: [8, 8.5] }],
    ["path", { d: "M3 21h18", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
