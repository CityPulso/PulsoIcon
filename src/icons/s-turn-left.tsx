import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "s-turn-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const STurnLeft = createIcon("STurnLeft", "s-turn-left", {
  nodes: [
    ["path", { d: "M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" }, { r: "pop", o: [19, 5] }],
    ["path", { d: "M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6 16l-3 3l3 3" }, { r: "slide", d: 0.5, x: -1, y: 0, a: 2 }],
  ],
});
