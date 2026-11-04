import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-forward-50" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindForward50 = createIcon("RewindForward50", "rewind-forward-50", {
  nodes: [
    ["path", { d: "M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" }, { r: "draw" }],
    ["path", { d: "M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M17 9l3 -3l-3 -3" }, { r: "slide", d: 0.35, x: 1, y: 0, a: 1.5, o: [19, 6] }],
    ["path", { d: "M9 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5v-3h3" }, { r: "draw", d: 0.25 }],
  ],
});
