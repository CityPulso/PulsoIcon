import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-card-j" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCardJ = createIcon("PlayCardJ", "play-card-j", {
  nodes: [
    ["path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 6h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 18h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M10 9h4v4a2 2 0 1 1 -4 0" }, { r: "draw", d: 0.2 }],
  ],
});
