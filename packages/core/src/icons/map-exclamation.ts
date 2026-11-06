import { icon } from "../icon.js";

// Adapted from Tabler Icons "map-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapExclamation = icon("MapExclamation", "map-exclamation", {
  nodes: [
    ["path", { d: "M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v13" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
