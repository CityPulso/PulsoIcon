import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "polygon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Polygon = createIcon("Polygon", "polygon", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [19, 8] }],
    ["path", { d: "M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [5, 11] }],
    ["path", { d: "M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [15, 19] }],
    ["path", { d: "M6.5 9.5l3.5 -3" }, { r: "draw" }],
    ["path", { d: "M14 5.5l3 1.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18.5 10l-2.5 7" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M13.5 17.5l-7 -5" }, { r: "draw", d: 0.3 }],
  ],
});
