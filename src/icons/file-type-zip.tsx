import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-type-zip" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTypeZip = createIcon("FileTypeZip", "file-type-zip", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
    ["path", { d: "M16 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M12 15v6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M5 15h3l-3 6h3" }, { r: "draw", d: 0.05 }],
  ],
});
