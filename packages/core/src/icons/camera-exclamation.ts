import { icon } from "../icon.js";

// Adapted from Tabler Icons "camera-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraExclamation = icon("CameraExclamation", "camera-exclamation", {
  nodes: [
    ["path", { d: "M15 20h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" }],
    ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M19 16v3" }, { r: "draw", o: [19, 17.5] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
  ],
});
