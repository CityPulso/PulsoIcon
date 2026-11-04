import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-ramp-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRampLeft = createIcon("ArrowRampLeft", "arrow-ramp-left", {
  nodes: [
    ["path", { d: "M17 3l0 8.707" }, { r: "drawBack", o: [17, 7] }],
    ["path", { d: "M13 7l4 -4l4 4" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [17, 5] }],
    ["path", { d: "M7 14l-4 -4l4 -4" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [5, 10] }],
    ["path", { d: "M17 21a11 11 0 0 0 -11 -11h-3" }, { r: "draw", d: 0.1, o: [10, 15] }],
  ],
});
