import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sparkle-highlight" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SparkleHighlight = createIcon("SparkleHighlight", "sparkle-highlight", {
  nodes: [
    [
      "path",
      {
        d: "M14.504 8.522l-1.758 -4.032a.814 .814 0 0 0 -1.492 0l-1.759 4.032c-.19 .436 -.537 .784 -.973 .973l-4.032 1.759a.814 .814 0 0 0 0 1.492l4.033 1.758c.436 .19 .784 .538 .973 .974l1.759 4.033a.814 .814 0 0 0 1.492 0l1.758 -4.033c.19 -.436 .538 -.784 .974 -.974l4.033 -1.758a.814 .814 0 0 0 0 -1.492l-4.033 -1.759a1.88 1.88 0 0 1 -.974 -.973",
      },
      { r: "twinkle", o: [12, 12] },
    ],
    ["path", { d: "M3 3l2 2" }, { r: "pop", d: 0.2, o: [4, 4] }],
    ["path", { d: "M21 3l-2 2" }, { r: "pop", d: 0.2, o: [20, 4] }],
    ["path", { d: "M3 21l2 -2" }, { r: "pop", d: 0.2, o: [4, 20] }],
    ["path", { d: "M21 21l-2 -2" }, { r: "pop", d: 0.2, o: [20, 20] }],
  ],
});
