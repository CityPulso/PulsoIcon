import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrows-split" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsSplit = icon("ArrowsSplit", "arrows-split", {
  nodes: [
    ["path", { d: "M21 17h-8l-3.5 -5h-6.5" }, { r: "drawBack", o: [12, 14.5] }],
    ["path", { d: "M21 7h-8l-3.495 5" }, { r: "drawBack", d: 0.05, o: [15, 9.5] }],
    ["path", { d: "M18 10l3 -3l-3 -3" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M18 20l3 -3l-3 -3" }, { r: "slide", d: 0.3, x: 1, a: 1.5, o: [19.5, 17] }],
  ],
});
