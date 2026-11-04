import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImagePause = createIcon("ImagePause", "image-pause", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
  ],
});
