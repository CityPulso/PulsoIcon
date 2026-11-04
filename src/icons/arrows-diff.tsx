import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-diff" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsDiff = createIcon("ArrowsDiff", "arrows-diff", {
  nodes: [
    ["path", { d: "M11 16h10" }, { r: "slide", x: -1, a: 1.5, o: [16, 16] }],
    ["path", { d: "M11 16l4 4" }, { r: "slide", x: -1, a: 1.5, o: [13, 16] }],
    ["path", { d: "M11 16l4 -4" }, { r: "slide", x: -1, a: 1.5, o: [13, 16] }],
    ["path", { d: "M13 8h-10" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [8, 8] }],
    ["path", { d: "M13 8l-4 4" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [11, 8] }],
    ["path", { d: "M13 8l-4 -4" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [11, 8] }],
  ],
});
