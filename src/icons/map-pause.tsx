import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapPause = createIcon("MapPause", "map-pause", {
  nodes: [
    ["path", { d: "M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v6.5" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
