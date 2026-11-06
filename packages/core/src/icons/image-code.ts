import { icon } from "../icon.js";

// Adapted from Tabler Icons "photo-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageCode = icon("ImageCode", "image-code", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, y: 0, a: 1, o: [16, 19] }],
  ],
});
