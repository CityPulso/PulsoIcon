import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bookmark-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BookmarkAi = createIcon("BookmarkAi", "bookmark-ai", {
  nodes: [
    ["path", { d: "M10.02 18.32l-4.02 2.68v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4.5" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
