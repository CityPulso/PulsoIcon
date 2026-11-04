import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "adjustments-star" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalStar = createIcon("SlidersVerticalStar", "sliders-vertical-star", {
  nodes: [
    ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M6 4v4" }],
    ["path", { d: "M6 12v8" }],
    ["path", { d: "M12 4v9.5" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M18 4v1" }],
    [
      "path",
      {
        d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138",
      },
      { r: "twinkle", d: 0.1, o: [19, 19] },
    ],
    ["path", { d: "M18 9v1" }],
  ],
});
