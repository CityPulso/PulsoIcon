import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brush-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrushOff = createIcon("BrushOff", "brush-off", {
  nodes: [
    ["path", { d: "M3 17a4 4 0 1 1 4 4h-4v-4" }],
    ["path", { d: "M21 3a16 16 0 0 0 -9.309 4.704m-1.795 2.212a15.993 15.993 0 0 0 -1.696 3.284" }, { r: "sway", a: 8, o: [10, 14] }],
    ["path", { d: "M21 3a16 16 0 0 1 -4.697 9.302m-2.195 1.786a15.993 15.993 0 0 1 -3.308 1.712" }, { r: "sway", a: 8, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
