import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-rss" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileRss = createIcon("FileRss", "file-rss", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M12 17a3 3 0 0 0 -3 -3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 17a6 6 0 0 0 -6 -6" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M9 17h.01" }, { r: "pop", d: 0.05, o: [9, 17] }],
  ],
});
