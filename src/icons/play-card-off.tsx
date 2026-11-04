import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-card-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCardOff = createIcon("PlayCardOff", "play-card-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 18h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
