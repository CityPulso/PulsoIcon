import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-ramp-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampRight = createIcon("ArrowRampRight", "arrow-ramp-right", {
  nodes: [
    ["path", { d: "M7 3l0 8.707" }, { r: "draw", o: [7, 7] }],
    ["path", { d: "M11 7l-4 -4l-4 4" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [7, 5] }],
    ["path", { d: "M17 14l4 -4l-4 -4" }, { r: "slide", d: 0.2, x: 1, a: 1.5, o: [19, 10] }],
    ["path", { d: "M7 21a11 11 0 0 1 11 -11h3" }, { r: "draw", d: 0.1, o: [14, 15] }],
  ],
});
