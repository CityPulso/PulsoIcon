import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-big-up-lines" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBigUpLines = icon("ArrowBigUpLines", "arrow-big-up-lines", {
  nodes: [
    [
      "path",
      { d: "M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3" },
      { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 8] },
    ],
    ["path", { d: "M9 21h6" }, { r: "fade", o: [12, 21] }],
    ["path", { d: "M9 18h6" }, { r: "fade", d: 0.05, o: [12, 18] }],
  ],
});
