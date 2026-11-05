import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bookmarks-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BookmarksOff = createIcon("BookmarksOff", "bookmarks-off", {
  nodes: [
    ["path", { d: "M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5 -3l-5 3v-12a2 2 0 0 1 2 -2" }, { r: "drop", x: 0, y: -1, a: 3, o: [10, 14] }],
    ["path", { d: "M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v10" }, { r: "float", d: 0.1, o: [14, 9] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3" }, { r: "drop", x: 0, y: -1, a: 3, o: [10, 14] }],
    ["path", { d: "M11 3h5a3 3 0 0 1 3 3v11", fill: "none" }, { r: "float", d: 0.1, o: [14, 9] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
