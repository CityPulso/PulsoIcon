import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-suv" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarSuv = createIcon("CarSuv", "car-suv", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "spin", o: [7, 17] }],
    ["path", { d: "M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "spin", o: [18, 17] }],
    ["path", { d: "M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M10 9v-4" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M2 7v4" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M5 12v-3h13" }, { r: "slide", x: 1, a: 1 }],
  ],
});
