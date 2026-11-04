import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "article" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Article = createIcon("Article", "article", {
  nodes: [
    ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M7 8h10" }, { r: "growX", d: 0.1, o: [7, 8] }],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.2, o: [7, 12] }],
    ["path", { d: "M7 16h10" }, { r: "growX", d: 0.3, o: [7, 16] }],
  ],
});
