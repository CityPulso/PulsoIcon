import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-elbow-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowElbowRight = createIcon("ArrowElbowRight", "arrow-elbow-right", {
  nodes: [
    ["path", { d: "M21 14v-6h-6" }, { r: "slide", d: 0.3, x: 1, y: -1, a: 1.5, o: [19, 10] }],
    ["path", { d: "M21 8l-9 9l-9 -9" }, { r: "draw", o: [12, 12] }],
  ],
});
