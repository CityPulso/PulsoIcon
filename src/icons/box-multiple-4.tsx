import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-multiple-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxMultiple4 = createIcon("BoxMultiple4", "box-multiple-4", {
  nodes: [
    ["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" }],
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, y: 1, a: 1, o: [10, 14] }],
    ["path", { d: "M15 14v-8l-4 6h5" }, { r: "draw", d: 0.15 }],
  ],
});
