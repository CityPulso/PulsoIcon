import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-big-left-lines" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBigLeftLines = createIcon("ArrowBigLeftLines", "arrow-big-left-lines", {
  nodes: [
    [
      "path",
      { d: "M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3" },
      { r: "bounce", d: 0.1, x: -1, a: 2, o: [8, 12] },
    ],
    ["path", { d: "M21 15v-6" }, { r: "fade", o: [21, 12] }],
    ["path", { d: "M18 15v-6" }, { r: "fade", d: 0.05, o: [18, 12] }],
  ],
});
