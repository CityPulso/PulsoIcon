import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-sensor-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageSensor3 = createIcon("ImageSensor3", "image-sensor-3", {
  nodes: [
    ["path", { d: "M17 4h1a2 2 0 0 1 2 2v1" }, { r: "slide", x: 0.7, y: -0.7, a: 1 }],
    ["path", { d: "M20 17v1a2 2 0 0 1 -2 2h-1" }, { r: "slide", x: 0.7, y: 0.7, a: 1 }],
    ["path", { d: "M7 20h-1a2 2 0 0 1 -2 -2v-1" }, { r: "slide", x: -0.7, y: 0.7, a: 1 }],
    ["path", { d: "M4 7v-1a2 2 0 0 1 2 -2h1" }, { r: "slide", x: -0.7, y: -0.7, a: 1 }],
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", d: 0.1, a: 0.15, o: [12, 12] }],
    ["path", { d: "M12 18v2" }, { r: "pop", d: 0.2, o: [12, 19] }],
    ["path", { d: "M4 12h2" }, { r: "pop", d: 0.2, o: [5, 12] }],
    ["path", { d: "M12 4v2" }, { r: "pop", d: 0.2, o: [12, 5] }],
    ["path", { d: "M20 12h-2" }, { r: "pop", d: 0.2, o: [19, 12] }],
  ],
});
