import { icon } from "../icon.js";

// Adapted from Tabler Icons "image-in-picture" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageInPicture = icon("ImageInPicture", "image-in-picture", {
  nodes: [
    ["path", { d: "M13 15c-2 0 -5 1 -5 5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M4 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2l0 -5" }, { r: "pop", d: 0, a: 0.15, o: [8.5, 15.5] }],
    ["path", { d: "M4 7v-2a1 1 0 0 1 1 -1h2" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M11 4h2" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M17 4h2a1 1 0 0 1 1 1v2" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M20 11v2" }, { r: "fade", d: 0.25 }],
    ["path", { d: "M20 17v2a1 1 0 0 1 -1 1h-2" }, { r: "fade", d: 0.3 }],
  ],
});
