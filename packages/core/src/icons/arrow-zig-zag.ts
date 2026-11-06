import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-zig-zag" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowZigZag = icon("ArrowZigZag", "arrow-zig-zag", {
  nodes: [
    ["path", { d: "M6 20v-10l10 6v-12" }, { r: "draw", o: [11, 12] }],
    ["path", { d: "M13 7l3 -3l3 3" }, { r: "slide", d: 0.3, y: -1, a: 1.5, o: [16, 5.5] }],
  ],
});
