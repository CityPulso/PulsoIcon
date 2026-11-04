import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "folder-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderCancel = createIcon("FolderCancel", "folder-cancel", {
  nodes: [
    ["path", { d: "M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
