import { icon } from "../icon.js";

// Adapted from Tabler Icons "square-toggle-horizontal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareToggleHorizontal = icon("SquareToggleHorizontal", "square-toggle-horizontal", {
  nodes: [
    ["path", { d: "M22 12h-20" }],
    ["path", { d: "M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M18 20a2 2 0 0 0 2 -2" }, { r: "fade" }],
    ["path", { d: "M4 18a2 2 0 0 0 2 2" }, { r: "fade" }],
    ["path", { d: "M14 20l-4 0" }, { r: "fade" }],
  ],
});
