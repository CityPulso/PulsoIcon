import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrows-move-horizontal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowsMoveHorizontal = createIcon("ArrowsMoveHorizontal", "arrows-move-horizontal", {
  nodes: [
    ["path", { d: "M18 9l3 3l-3 3" }, { r: "slide", x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "M15 12h6" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
    ["path", { d: "M6 9l-3 3l3 3" }, { r: "slide", x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M3 12h6" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
  ],
});
