import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-type-jsx" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTypeJsx = createIcon("FileTypeJsx", "file-type-jsx", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
    ["path", { d: "M4 15h3v4.5a1.5 1.5 0 0 1 -3 0" }, { r: "draw", d: 0.05 }],
    [
      "path",
      { d: "M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" },
      { r: "draw", d: 0.2 },
    ],
    ["path", { d: "M16 15l4 6" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M16 21l4 -6" }, { r: "draw", d: 0.35 }],
  ],
});
