import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-backward-10" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindBackward10 = createIcon("RewindBackward10", "rewind-backward-10", {
  nodes: [
    ["path", { d: "M7 9l-3 -3l3 -3" }, { r: "slide", d: 0.35, x: -1, y: 0, a: 1.5, o: [5, 6] }],
    ["path", { d: "M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" }, { r: "draw" }],
    ["path", { d: "M6 14v6" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.25 }],
  ],
});
