import { icon } from "../icon.js";

// Adapted from Tabler Icons "map-route" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapRoute = icon("MapRoute", "map-route", {
  nodes: [
    ["path", { d: "M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" }],
    ["path", { d: "M9 12v.01" }, { r: "pop", d: 0.2, o: [9, 12] }],
    ["path", { d: "M6 13v.01" }, { r: "pop", d: 0.1, o: [6, 13] }],
    ["path", { d: "M17 15l-4 -4" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M13 15l4 -4" }, { r: "draw", d: 0.45 }],
  ],
});
