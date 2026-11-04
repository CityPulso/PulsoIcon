import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tic-tac" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TicTac = createIcon("TicTac", "tic-tac", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "draw" }],
    ["path", { d: "M3 12h18" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M4 16l4 4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4 20l4 -4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 4l4 4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M16 8l4 -4" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.45 }],
  ],
});
