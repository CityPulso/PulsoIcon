import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-sensor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageSensor = createIcon("ImageSensor", "image-sensor", {
  nodes: [
    ["path", { d: "M17 5h2a2 2 0 0 1 2 2v2" }, { r: "slide", d: 0, x: 1, y: -1, a: 1 }],
    ["path", { d: "M21 15v2a2 2 0 0 1 -2 2h-2" }, { r: "slide", d: 0, x: 1, y: 1, a: 1 }],
    ["path", { d: "M7 19h-2a2 2 0 0 1 -2 -2v-2" }, { r: "slide", d: 0, x: -1, y: 1, a: 1 }],
    ["path", { d: "M3 9v-2a2 2 0 0 1 2 -2h2" }, { r: "slide", d: 0, x: -1, y: -1, a: 1 }],
    ["path", { d: "M7 10a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -4" }, { r: "pulse", d: 0.15, a: 0.12, o: [12, 12] }],
  ],
});
