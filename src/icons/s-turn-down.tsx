import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "s-turn-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const STurnDown = createIcon("STurnDown", "s-turn-down", {
  nodes: [
    ["path", { d: "M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 18l3 3l3 -3" }, { r: "slide", d: 0.5, x: 0, y: 1, a: 2 }],
  ],
});
