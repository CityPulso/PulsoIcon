import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "polygon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PolygonOff = createIcon("PolygonOff", "polygon-off", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.06, o: [19, 8] }],
    ["path", { d: "M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.18, o: [5, 11] }],
    ["path", { d: "M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.12, o: [15, 19] }],
    ["path", { d: "M6.5 9.5l1.546 -1.311" }],
    ["path", { d: "M14 5.5l3 1.5" }],
    ["path", { d: "M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" }],
    ["path", { d: "M13.5 17.5l-7 -5" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
