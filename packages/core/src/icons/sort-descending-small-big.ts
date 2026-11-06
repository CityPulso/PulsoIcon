import { icon } from "../icon.js";

// Adapted from Tabler Icons "sort-descending-small-big" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SortDescendingSmallBig = icon("SortDescendingSmallBig", "sort-descending-small-big", {
  nodes: [
    ["path", { d: "M10 15l-3 3l-3 -3" }, { r: "slide", x: 0, y: 1, a: 2, o: [7, 16.5] }],
    ["path", { d: "M7 6v12" }, { r: "draw" }],
    [
      "path",
      { d: "M14 18.333c0 .369 .298 .667 .667 .667h2.666a.667 .667 0 0 0 .667 -.667v-2.666a.667 .667 0 0 0 -.667 -.667h-2.666a.667 .667 0 0 0 -.667 .667v2.666" },
      { r: "pop", d: 0.1, o: [17, 8] },
    ],
    [
      "path",
      {
        d: "M14 10.833c0 .645 .522 1.167 1.167 1.167h4.666c.645 0 1.167 -.522 1.167 -1.167v-4.666c0 -.645 -.522 -1.167 -1.167 -1.167h-4.666c-.645 0 -1.167 .522 -1.167 1.167v4.666",
      },
      { r: "pop", d: 0.2, o: [17, 16] },
    ],
  ],
});
