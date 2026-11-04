import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraCode = createIcon("CameraCode", "camera-code", {
  nodes: [
    ["path", { d: "M11 20h-6a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M14.948 13.559a3 3 0 1 0 -2.58 2.419" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, y: 0, a: 1, o: [21, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, y: 0, a: 1, o: [16, 19] }],
  ],
});
