import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-capsule" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowCapsule = icon("ArrowCapsule", "arrow-capsule", {
  nodes: [
    ["path", { d: "M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2" }, { r: "redraw", o: [12, 12] }],
    ["path", { d: "M15 8l3 3l3 -3" }, { r: "bounce", d: 0.2, y: 1, a: 1.5, o: [18, 9.5] }],
  ],
});
