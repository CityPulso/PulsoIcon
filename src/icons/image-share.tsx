import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageShare = createIcon("ImageShare", "image-share", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18.5, 19.5] }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18.5, 19.5] }],
  ],
});
