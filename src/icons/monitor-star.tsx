import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-desktop-star" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MonitorStar = createIcon("MonitorStar", "monitor-star", {
  nodes: [
    ["path", { d: "M10 16h-6a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6.5" }],
    ["path", { d: "M7 20h3.5" }],
    ["path", { d: "M9 16v4" }],
    [
      "path",
      {
        d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138",
      },
      { r: "twinkle", d: 0.1, o: [17.8, 18.6] },
    ],
  ],
});
