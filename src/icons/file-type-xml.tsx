import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-type-xml" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTypeXml = createIcon("FileTypeXml", "file-type-xml", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
    ["path", { d: "M4 15l4 6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M4 21l4 -6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 15v6h3" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M11 21v-6l2.5 3l2.5 -3v6" }, { r: "draw", d: 0.2 }],
  ],
});
