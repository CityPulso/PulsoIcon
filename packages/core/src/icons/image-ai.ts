import { icon } from "../icon.js";

// Adapted from Tabler Icons "photo-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageAi = icon("ImageAi", "image-ai", {
  text: true,
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" }],
    ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.15, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.25, o: [21, 18] }],
  ],
});
