import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wheelchair-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WheelchairOff = createIcon("WheelchairOff", "wheelchair-off", {
  nodes: [
    ["path", { d: "M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "spin", d: 0, o: [8, 16] }],
    ["path", { d: "M17.582 17.59a2 2 0 0 0 2.833 2.824" }, { r: "spin", d: 0, o: [19, 19] }],
    ["path", { d: "M14 14h-1.4" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 6v5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 8h2m4 0h5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M15 8v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
