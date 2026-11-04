import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-half" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareHalf = createIcon("SquareHalf", "square-half", {
  nodes: [
    ["path", { d: "M12 4v16" }],
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M12 13l7.5 -7.5" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M12 18l8 -8" }, { r: "growX", d: 0.07, o: [12, 12] }],
    ["path", { d: "M15 20l5 -5" }, { r: "growX", d: 0.14, o: [12, 12] }],
    ["path", { d: "M12 8l4 -4" }, { r: "growX", d: 0.21000000000000002, o: [12, 12] }],
  ],
});
