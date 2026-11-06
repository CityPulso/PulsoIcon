import { icon } from "../icon.js";

// Adapted from Tabler Icons "photo-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageCircle = icon("ImageCircle", "image-circle", {
  nodes: [
    ["path", { d: "M15 8h.01" }, { r: "rise", d: 0, a: 2, o: [15, 8] }],
    ["path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9" }, { r: "press", d: 0, a: 0.06, o: [12, 12] }],
  ],
});
