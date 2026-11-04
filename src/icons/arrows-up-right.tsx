import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-up-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsUpRight = createIcon("ArrowsUpRight", "arrows-up-right", {
  nodes: [
    ["path", { d: "M17 21l4 -4l-4 -4" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19, 17] }],
    ["path", { d: "M21 17h-11a3 3 0 0 1 -3 -3v-11" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M11 7l-4 -4l-4 4" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [7, 5] }],
  ],
});
