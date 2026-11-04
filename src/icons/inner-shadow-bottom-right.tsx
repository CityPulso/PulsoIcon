import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "inner-shadow-bottom-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InnerShadowBottomRight = createIcon("InnerShadowBottomRight", "inner-shadow-bottom-right", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M18 12a6 6 0 0 1 -6 6" }, { r: "draw", d: 0.1 }],
  ],
});
