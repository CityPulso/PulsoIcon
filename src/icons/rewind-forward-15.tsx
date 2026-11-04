import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-forward-15" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindForward15 = createIcon("RewindForward15", "rewind-forward-15", {
  nodes: [
    ["path", { d: "M17 9l3 -3l-3 -3" }, { r: "slide", d: 0.35, x: 1, y: 0, a: 1.5, o: [19, 6] }],
    ["path", { d: "M9 18a6 6 0 1 1 0 -12h11" }, { r: "draw" }],
    ["path", { d: "M16 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13 14v6" }, { r: "draw", d: 0.25 }],
  ],
});
