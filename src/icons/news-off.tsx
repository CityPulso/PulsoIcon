import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "news-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NewsOff = createIcon("NewsOff", "news-off", {
  nodes: [
    [
      "path",
      { d: "M16 6h3a1 1 0 0 1 1 1v9m-.606 3.435a2 2 0 0 1 -3.394 -1.435v-2m0 -4v-7a1 1 0 0 0 -1 -1h-7m-3.735 .321a1 1 0 0 0 -.265 .679v12a3 3 0 0 0 3 3h11" },
      { r: "flip", o: [12, 12] },
    ],
    ["path", { d: "M8 12h4" }, { r: "growX", d: 0.2, o: [8, 12] }],
    ["path", { d: "M8 16h4" }, { r: "growX", d: 0.3, o: [8, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
