import { icon } from "../icon.js";

// Adapted from Tabler Icons "map-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapBolt = icon("MapBolt", "map-bolt", {
  nodes: [
    ["path", { d: "M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v7.5" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
  ],
});
