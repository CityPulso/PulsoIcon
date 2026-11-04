import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "folder-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderExclamation = createIcon("FolderExclamation", "folder-exclamation", {
  nodes: [
    ["path", { d: "M15 19h-10a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
