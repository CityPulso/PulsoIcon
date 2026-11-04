import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-big-right-lines" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBigRightLines = createIcon("ArrowBigRightLines", "arrow-big-right-lines", {
  nodes: [
    [
      "path",
      { d: "M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3" },
      { r: "bounce", d: 0.1, x: 1, a: 2, o: [16, 12] },
    ],
    ["path", { d: "M3 9v6" }, { r: "fade", o: [3, 12] }],
    ["path", { d: "M6 9v6" }, { r: "fade", d: 0.05, o: [6, 12] }],
  ],
});
