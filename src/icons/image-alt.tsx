import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-alt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageAlt = createIcon("ImageAlt", "image-alt", {
  nodes: [
    ["path", { d: "M6 18h5" }, { r: "growX", d: 0.1, o: [6, 18] }],
    ["path", { d: "M14 18h4" }, { r: "growX", d: 0.2, o: [14, 18] }],
    ["path", { d: "M15 7h.01" }, { r: "pop", o: [15, 7] }],
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" }],
    ["path", { d: "M3 15l5 -5c.928 -.893 2.072 -.893 3 0l5 5" }],
    ["path", { d: "M14 13l1 -1c.928 -.893 2.072 -.893 3 0l3 3" }],
    ["path", { d: "M3 15h18" }],
  ],
});
