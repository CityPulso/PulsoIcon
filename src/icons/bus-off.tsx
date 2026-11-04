import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bus-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BusOff = createIcon("BusOff", "bus-off", {
  nodes: [
    ["path", { d: "M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [6, 17] }],
    ["path", { d: "M16.18 16.172a2 2 0 0 0 2.652 2.648" }, { r: "spin", d: 0, o: [18, 17] }],
    ["path", { d: "M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M16 5l1.5 7h4.5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M2 10h8m4 0h3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M7 7v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M12 5v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
