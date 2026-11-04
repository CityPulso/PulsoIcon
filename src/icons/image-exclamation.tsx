import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageExclamation = createIcon("ImageExclamation", "image-exclamation", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M15 21h-9a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" }],
    ["path", { d: "M14 14l1 -1c.665 -.64 1.44 -.821 2.167 -.545" }],
    ["path", { d: "M19 16v3" }, { r: "draw", o: [19, 17.5] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
  ],
});
