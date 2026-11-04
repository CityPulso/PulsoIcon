import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-up-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsUpLeft = createIcon("ArrowsUpLeft", "arrows-up-left", {
  nodes: [
    ["path", { d: "M21 7l-4 -4l-4 4" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [17, 5] }],
    ["path", { d: "M17 3v11a3 3 0 0 1 -3 3h-11" }, { r: "drawOut", o: [12, 12] }],
    ["path", { d: "M7 13l-4 4l4 4" }, { r: "slide", d: 0.3, x: -1, a: 1.5, o: [5, 17] }],
  ],
});
