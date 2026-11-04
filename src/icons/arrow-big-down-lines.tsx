import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-big-down-lines" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBigDownLines = createIcon("ArrowBigDownLines", "arrow-big-down-lines", {
  nodes: [
    [
      "path",
      { d: "M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3" },
      { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 16] },
    ],
    ["path", { d: "M15 3h-6" }, { r: "fade", o: [12, 3] }],
    ["path", { d: "M15 6h-6" }, { r: "fade", d: 0.05, o: [12, 6] }],
  ],
});
