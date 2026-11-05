import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-multiple-9" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxMultiple9 = createIcon("BoxMultiple9", "box-multiple-9", {
  text: true,
  nodes: [
    ["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" }],
    ["path", { d: "M12 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 12a2 2 0 1 0 4 0v-4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, y: 1, a: 1, o: [10, 14] }],
  ],
});
