import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-move-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMoveRight = createIcon("ArrowMoveRight", "arrow-move-right", {
  nodes: [
    ["path", { d: "M11 12h10" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [16, 12] }],
    ["path", { d: "M18 9l3 3l-3 3" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "pulse", a: 0.2, o: [5, 12] }],
  ],
});
