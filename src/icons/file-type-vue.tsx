import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-type-vue" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTypeVue = createIcon("FileTypeVue", "file-type-vue", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
    ["path", { d: "M4 15l2 6l2 -6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M11 15v4.5a1.5 1.5 0 0 0 3 0v-4.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20 15h-3v6h3" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M17 18h2" }, { r: "draw", d: 0.35 }],
  ],
});
