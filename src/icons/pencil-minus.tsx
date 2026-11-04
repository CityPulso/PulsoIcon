import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pencil-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilMinus = createIcon("PencilMinus", "pencil-minus", {
  nodes: [
    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M16 19h6" }, { r: "draw" }],
  ],
});
