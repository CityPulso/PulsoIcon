import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-arrow-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileArrowLeft = createIcon("FileArrowLeft", "file-arrow-left", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M15 15h-6" }, { r: "slide", x: -1, a: 2 }],
    ["path", { d: "M11.5 17.5l-2.5 -2.5l2.5 -2.5" }, { r: "slide", x: -1, a: 2 }],
  ],
});
