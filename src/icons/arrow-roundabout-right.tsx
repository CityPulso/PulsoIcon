import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-roundabout-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRoundaboutRight = createIcon("ArrowRoundaboutRight", "arrow-roundabout-right", {
  nodes: [
    ["path", { d: "M21 9h-8a5 5 0 1 0 -5 5v7" }, { r: "draw", o: [11, 12] }],
    ["path", { d: "M17 5l4 4l-4 4" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19, 9] }],
  ],
});
