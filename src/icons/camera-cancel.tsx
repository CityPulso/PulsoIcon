import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraCancel = createIcon("CameraCancel", "camera-cancel", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" }],
    ["path", { d: "M14.984 13.307a3 3 0 1 0 -2.32 2.62" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.15, o: [19, 19] }],
  ],
});
