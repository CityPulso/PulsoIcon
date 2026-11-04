import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "folder-stats" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderStats = createIcon("FolderStats", "folder-stats", {
  nodes: [
    ["path", { d: "M10.25 19h-5.25a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3" }],
    ["path", { d: "M13 22l3 -3l2 2l4 -4" }, { r: "draw" }],
    ["path", { d: "M19 17h3v3" }, { r: "draw", d: 0.35 }],
  ],
});
