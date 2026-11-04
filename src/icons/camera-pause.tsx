import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraPause = createIcon("CameraPause", "camera-pause", {
  nodes: [
    ["path", { d: "M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M14.958 13.506a3 3 0 1 0 -1.735 2.235" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.3, o: [19, 19.5] }],
  ],
});
