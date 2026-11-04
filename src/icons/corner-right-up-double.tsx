import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "corner-right-up-double" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CornerRightUpDouble = createIcon("CornerRightUpDouble", "corner-right-up-double", {
  nodes: [
    ["path", { d: "M5 19h6a3 3 0 0 0 3 -3v-7" }, { r: "draw" }],
    ["path", { d: "M10 13l4 -4l4 4m-8 -5l4 -4l4 4" }, { r: "slide", d: 0.25, x: 0, y: -1, a: 2.5 }],
  ],
});
