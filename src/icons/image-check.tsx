import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageCheck = createIcon("ImageCheck", "image-check", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l.5 .5" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", o: [18, 19] }],
  ],
});
