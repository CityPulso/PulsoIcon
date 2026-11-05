import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chalkboard-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChalkboardOff = createIcon("ChalkboardOff", "chalkboard-off", {
  nodes: [
    ["path", { d: "M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2m4 0h10a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M17 17v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h4" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [14, 17.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" }],
    ["path", { d: "M11 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -1" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [14, 17.5] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
