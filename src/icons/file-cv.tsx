import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-cv" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileCv = createIcon("FileCv", "file-cv", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 11l1.5 6l1.5 -6" }, { r: "draw", d: 0.22 }],
  ],
});
