import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-left-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsLeftDown = createIcon("ArrowsLeftDown", "arrows-left-down", {
  nodes: [
    ["path", { d: "M7 3l-4 4l4 4" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [5, 7] }],
    ["path", { d: "M3 7h11a3 3 0 0 1 3 3v11" }, { r: "drawOut", o: [12, 12] }],
    ["path", { d: "M13 17l4 4l4 -4" }, { r: "slide", d: 0.3, y: 1, a: 1.5, o: [17, 19] }],
  ],
});
