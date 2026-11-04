import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pencil-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilExclamation = createIcon("PencilExclamation", "pencil-exclamation", {
  nodes: [
    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M19 16v3" }, { r: "shake", a: 1 }],
    ["path", { d: "M19 22v.01" }, { r: "shake", a: 1 }],
  ],
});
