import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "s-turn-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const STurnRight = createIcon("STurnRight", "s-turn-right", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18 16l3 3l-3 3" }, { r: "slide", d: 0.5, x: 1, y: 0, a: 2 }],
  ],
});
