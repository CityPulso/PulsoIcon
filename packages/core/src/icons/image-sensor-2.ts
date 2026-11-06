import { icon } from "../icon.js";

// Adapted from Tabler Icons "photo-sensor-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageSensor2 = icon("ImageSensor2", "image-sensor-2", {
  nodes: [
    ["path", { d: "M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "pulse", d: 0.1, a: 0.15, o: [12, 12] }],
  ],
});
