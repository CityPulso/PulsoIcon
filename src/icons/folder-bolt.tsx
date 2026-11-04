import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "folder-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderBolt = createIcon("FolderBolt", "folder-bolt", {
  nodes: [
    ["path", { d: "M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker" }],
  ],
});
