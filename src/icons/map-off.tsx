import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapOff = createIcon("MapOff", "map-off", {
  nodes: [
    ["path", { d: "M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M9 4v1m0 4v8" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M15 7v4m0 4v5" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
