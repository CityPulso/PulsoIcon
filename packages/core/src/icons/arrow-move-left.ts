import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-move-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMoveLeft = icon("ArrowMoveLeft", "arrow-move-left", {
  nodes: [
    ["path", { d: "M13 12h-10" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [8, 12] }],
    ["path", { d: "M6 15l-3 -3l3 -3" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0" }, { r: "pulse", a: 0.2, o: [19, 12] }],
  ],
});
