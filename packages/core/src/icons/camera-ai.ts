import { icon } from "../icon.js";

// Adapted from Tabler Icons "camera-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraAi = icon("CameraAi", "camera-ai", {
  text: true,
  nodes: [
    ["path", { d: "M10 20h-5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M14.362 11.15a3 3 0 1 0 -4.144 4.263" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.15, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.25, o: [21, 18] }],
  ],
});
