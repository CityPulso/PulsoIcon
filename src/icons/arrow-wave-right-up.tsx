import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-wave-right-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowWaveRightUp = createIcon("ArrowWaveRightUp", "arrow-wave-right-up", {
  nodes: [
    ["path", { d: "M17 10h4v4" }, { r: "slide", d: 0.3, x: 1, y: -1, a: 1.5, o: [19, 12] }],
    ["path", { d: "M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2" }, { r: "draw", o: [12, 12] }],
  ],
});
