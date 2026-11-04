import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "paint-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PaintOff = createIcon("PaintOff", "paint-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4m-4 0h-2a2 2 0 0 1 -2 -2v-2" }, { r: "swing", a: 6, o: [12, 20] }],
    ["path", { d: "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5m-4 0h-1v2" }, { r: "swing", a: 6, o: [12, 20] }],
    ["path", { d: "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" }, { r: "swing", a: 6, o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
