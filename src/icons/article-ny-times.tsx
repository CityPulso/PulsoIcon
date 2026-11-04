import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "article-ny-times" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArticleNyTimes = createIcon("ArticleNyTimes", "article-ny-times", {
  nodes: [
    ["path", { d: "M3 6V4h8v2" }, { r: "pop", o: [7, 8] }],
    ["path", { d: "M7 4v8" }, { r: "pop", o: [7, 8] }],
    ["path", { d: "M5 12h4" }, { r: "pop", o: [7, 8] }],
    ["path", { d: "M15 8h6" }, { r: "growX", d: 0.1, o: [15, 8] }],
    ["path", { d: "M15 12h6" }, { r: "growX", d: 0.15, o: [15, 12] }],
    ["path", { d: "M3 16h18" }, { r: "growX", d: 0.2, o: [3, 16] }],
    ["path", { d: "M3 20h18" }, { r: "growX", d: 0.25, o: [3, 20] }],
  ],
});
