import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-multiple-0" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxMultiple0 = createIcon("BoxMultiple0", "box-multiple-0", {
  text: true,
  nodes: [
    ["path", { d: "M14 6a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" }],
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, y: 1, a: 1, o: [10, 14] }],
  ],
});
