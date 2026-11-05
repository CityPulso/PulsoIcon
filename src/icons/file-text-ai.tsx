import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-text-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTextAi = createIcon("FileTextAi", "file-text-ai", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" }],
    ["path", { d: "M9 9h1" }, { r: "growX", d: 0.05, o: [9, 9] }],
    ["path", { d: "M9 13h2.5" }, { r: "growX", d: 0.13, o: [9, 13] }],
    ["path", { d: "M9 17h1" }, { r: "growX", d: 0.21, o: [9, 17] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45 }],
  ],
});
