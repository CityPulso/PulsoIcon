import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-backward-15" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindBackward15 = createIcon("RewindBackward15", "rewind-backward-15", {
  nodes: [
    ["path", { d: "M8 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 18a6 6 0 1 0 0 -12h-11" }, { r: "draw" }],
    ["path", { d: "M5 14v6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7 9l-3 -3l3 -3" }, { r: "slide", d: 0.35, x: -1, y: 0, a: 1.5, o: [5, 6] }],
  ],
});
