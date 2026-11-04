import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsDown = createIcon("ArrowsDown", "arrows-down", {
  nodes: [
    ["path", { d: "M7 21l0 -18" }, { r: "slide", y: 1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M20 18l-3 3l-3 -3" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [17, 19.5] }],
    ["path", { d: "M4 18l3 3l3 -3" }, { r: "slide", y: 1, a: 1.5, o: [7, 19.5] }],
    ["path", { d: "M17 21l0 -18" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [17, 12] }],
  ],
});
