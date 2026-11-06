import { icon } from "../icon.js";

// Adapted from Tabler Icons "folder-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderAi = icon("FolderAi", "folder-ai", {
  text: true,
  nodes: [
    ["path", { d: "M10 19h-5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
