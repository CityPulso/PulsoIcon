import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wall-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WallOff = createIcon("WallOff", "wall-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409" }],
    ["path", { d: "M4 8h4m4 0h8" }, { r: "growX", o: [4, 8] }],
    ["path", { d: "M20 12h-4m-4 0h-8" }, { r: "growX", d: 0.08, o: [4, 12] }],
    ["path", { d: "M4 16h12" }, { r: "growX", d: 0.16, o: [4, 16] }],
    ["path", { d: "M9 4v1" }],
    ["path", { d: "M14 8v2" }],
    ["path", { d: "M8 12v4" }],
    ["path", { d: "M11 16v4" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
