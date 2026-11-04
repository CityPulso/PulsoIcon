import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "corner-up-left-double" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CornerUpLeftDouble = createIcon("CornerUpLeftDouble", "corner-up-left-double", {
  nodes: [
    ["path", { d: "M19 18v-6a3 3 0 0 0 -3 -3h-7" }, { r: "draw" }],
    ["path", { d: "M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" }, { r: "slide", d: 0.25, x: -1, y: 0, a: 2.5 }],
  ],
});
