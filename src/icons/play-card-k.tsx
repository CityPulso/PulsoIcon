import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-card-k" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCardK = createIcon("PlayCardK", "play-card-k", {
  nodes: [
    ["path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 6h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 18h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M10 9v6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 9l-3 3l3 3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 12h1" }, { r: "draw", d: 0.3 }],
  ],
});
