import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layout-align-center" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutAlignCenter = createIcon("LayoutAlignCenter", "layout-align-center", {
  nodes: [
    ["path", { d: "M12 4l0 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 15l0 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" }, { r: "pulse", a: 0.12, o: [12, 12] }],
  ],
});
