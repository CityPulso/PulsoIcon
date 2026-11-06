import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-move-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMoveDown = icon("ArrowMoveDown", "arrow-move-down", {
  nodes: [
    ["path", { d: "M12 11v10" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 16] }],
    ["path", { d: "M9 18l3 3l3 -3" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 19.5] }],
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", a: 0.2, o: [12, 5] }],
  ],
});
