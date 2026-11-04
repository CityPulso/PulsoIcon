import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "corner-left-down-double" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CornerLeftDownDouble = createIcon("CornerLeftDownDouble", "corner-left-down-double", {
  nodes: [
    ["path", { d: "M18 4h-6a3 3 0 0 0 -3 3v7" }, { r: "draw" }],
    ["path", { d: "M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" }, { r: "slide", d: 0.25, x: 0, y: 1, a: 2.5 }],
  ],
});
