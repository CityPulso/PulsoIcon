import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layout-distribute-horizontal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutDistributeHorizontal = createIcon("LayoutDistributeHorizontal", "layout-distribute-horizontal", {
  nodes: [
    ["path", { d: "M4 4l16 0" }, { r: "slide", y: -1, a: 1 }],
    ["path", { d: "M4 20l16 0" }, { r: "slide", y: 1, a: 1 }],
    ["path", { d: "M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" }, { r: "jelly", o: [12, 12] }],
  ],
});
