import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "corner-down-left-double" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CornerDownLeftDouble = createIcon("CornerDownLeftDouble", "corner-down-left-double", {
  nodes: [
    ["path", { d: "M19 5v6a3 3 0 0 1 -3 3h-7" }, { r: "draw" }],
    ["path", { d: "M13 10l-4 4l4 4m-5 -8l-4 4l4 4" }, { r: "slide", d: 0.25, x: -1, y: 0, a: 2.5 }],
  ],
});
