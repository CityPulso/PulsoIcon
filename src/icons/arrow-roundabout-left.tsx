import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-roundabout-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRoundaboutLeft = createIcon("ArrowRoundaboutLeft", "arrow-roundabout-left", {
  nodes: [
    ["path", { d: "M3 9h8a5 5 0 1 1 5 5v7" }, { r: "draw", o: [13, 12] }],
    ["path", { d: "M7 5l-4 4l4 4" }, { r: "slide", d: 0.3, x: -1, a: 1.5, o: [5, 9] }],
  ],
});
