import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "inner-shadow-bottom-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InnerShadowBottomLeft = createIcon("InnerShadowBottomLeft", "inner-shadow-bottom-left", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M6 12a6 6 0 0 0 6 6" }, { r: "draw", d: 0.1 }],
  ],
});
