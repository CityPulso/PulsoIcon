import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-loop-left-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLoopLeft2 = createIcon("ArrowLoopLeft2", "arrow-loop-left-2", {
  nodes: [
    ["path", { d: "M13 21v-6m0 -6v-1a4 4 0 1 1 4 4h-13" }, { r: "draw" }],
    ["path", { d: "M8 16l-4 -4l4 -4" }, { r: "slide", d: 0.35, x: -1, a: 1.5, o: [6, 12] }],
  ],
});
