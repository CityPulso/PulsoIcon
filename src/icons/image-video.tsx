import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-video" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageVideo = createIcon("ImageVideo", "image-video", {
  nodes: [
    ["path", { d: "M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" }, { r: "slide", d: 0, x: -1, y: -1, a: 1 }],
    ["path", { d: "M9 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6" }, { r: "press", d: 0.1, a: 0.08, o: [15, 15] }],
    ["path", { d: "M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M14 13.5v3l2.5 -1.5l-2.5 -1.5" }, { r: "pop", d: 0.2, o: [15.2, 15] }],
    ["path", { d: "M7 6v.01" }, { r: "pop", d: 0.1, o: [7, 6] }],
  ],
});
