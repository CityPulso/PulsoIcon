import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-toggle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareToggle = createIcon("SquareToggle", "square-toggle", {
  nodes: [
    ["path", { d: "M12 2l0 20" }],
    ["path", { d: "M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M20 6a2 2 0 0 0 -2 -2" }, { r: "fade" }],
    ["path", { d: "M18 20a2 2 0 0 0 2 -2" }, { r: "fade" }],
    ["path", { d: "M20 10l0 4" }, { r: "fade" }],
  ],
});
