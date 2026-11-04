import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-card-q" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCardQ = createIcon("PlayCardQ", "play-card-q", {
  nodes: [
    ["path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 6h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 18h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12 9a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M13 14l1.5 1.5" }, { r: "draw", d: 0.35 }],
  ],
});
