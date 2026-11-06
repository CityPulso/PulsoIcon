import { icon } from "../icon.js";

// Adapted from Tabler Icons "layout-distribute-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutDistributeVertical = icon("LayoutDistributeVertical", "layout-distribute-vertical", {
  nodes: [
    ["path", { d: "M4 4l0 16" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M20 4l0 16" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M9 8a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" }, { r: "jelly", o: [12, 12] }],
  ],
});
