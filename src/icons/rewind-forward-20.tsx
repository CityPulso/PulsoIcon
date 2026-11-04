import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-forward-20" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindForward20 = createIcon("RewindForward20", "rewind-forward-20", {
  nodes: [
    ["path", { d: "M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" }, { r: "draw" }],
    ["path", { d: "M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M17 9l3 -3l-3 -3" }, { r: "slide", d: 0.35, x: 1, y: 0, a: 1.5, o: [19, 6] }],
    ["path", { d: "M9 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, { r: "draw", d: 0.25 }],
  ],
});
