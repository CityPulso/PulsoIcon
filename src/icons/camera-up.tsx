import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraUp = createIcon("CameraUp", "camera-up", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" }],
    ["path", { d: "M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", x: 0, y: -1, a: 1.5, o: [19, 19] }],
  ],
});
