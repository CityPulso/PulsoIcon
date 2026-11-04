import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraSearch = createIcon("CameraSearch", "camera-search", {
  nodes: [
    ["path", { d: "M11.5 20h-6.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2.5" }],
    ["path", { d: "M14.757 11.815a3 3 0 1 0 -3.431 4.109" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
