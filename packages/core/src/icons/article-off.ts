import { icon } from "../icon.js";

// Adapted from Tabler Icons "article-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArticleOff = icon("ArticleOff", "article-off", {
  nodes: [
    ["path", { d: "M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821a1.993 1.993 0 0 1 -.828 .179h-14a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.156 -1.814" }],
    ["path", { d: "M7 8h1m4 0h5" }, { r: "growX", o: [7, 8] }],
    ["path", { d: "M7 12h5m4 0h1" }, { r: "growX", d: 0.08, o: [7, 12] }],
    ["path", { d: "M7 16h9" }, { r: "growX", d: 0.16, o: [7, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M7 8h10" }, { r: "growX", o: [7, 8] }, "line"],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.08, o: [7, 12] }, "line"],
    ["path", { d: "M7 16h10" }, { r: "growX", d: 0.16, o: [7, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
