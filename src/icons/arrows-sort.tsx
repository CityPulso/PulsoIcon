import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-sort" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsSort = createIcon("ArrowsSort", "arrows-sort", {
  nodes: [
    ["path", { d: "M3 9l4 -4l4 4m-4 -4v14" }, { r: "slide", y: -1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M21 15l-4 4l-4 -4m4 4v-14" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [17, 12] }],
  ],
});
