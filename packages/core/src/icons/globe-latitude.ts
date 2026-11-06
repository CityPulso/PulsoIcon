import { icon } from "../icon.js";

// Adapted from Tabler Icons "world-latitude" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeLatitude = icon("GlobeLatitude", "globe-latitude", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M4.6 7l14.8 0" }, { r: "growX", o: [12, 7] }],
    ["path", { d: "M3 12l18 0" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["path", { d: "M4.6 17l14.8 0" }, { r: "growX", d: 0.2, o: [12, 17] }],
  ],
});
