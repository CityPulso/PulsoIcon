import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "album-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlbumOff = createIcon("AlbumOff", "album-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362 .364 -.864 .59 -1.419 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .585 -1.413" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12 4v4m1.503 1.497l.497 -.497l2 2v-7" }, { r: "bounce", y: -1, a: 1, o: [14, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
