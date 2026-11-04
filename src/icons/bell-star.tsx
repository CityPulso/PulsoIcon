import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-star" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellStar = createIcon("BellStar", "bell-star", {
  nodes: [
    ["path", { d: "M9.5 17h-5.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 3.88 5" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 2.15 2.878" }, { r: "ring", a: 8, o: [12, 3] }],
    [
      "path",
      {
        d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138",
      },
      { r: "twinkle", o: [18, 18.4] },
    ],
  ],
});
