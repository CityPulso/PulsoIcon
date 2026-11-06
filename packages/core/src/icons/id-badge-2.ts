import { icon } from "../icon.js";

// Adapted from Tabler Icons "id-badge-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IdBadge2 = icon("IdBadge2", "id-badge-2", {
  nodes: [
    ["path", { d: "M7 12h3v4h-3l0 -4" }, { r: "pop", d: 0.1, o: [8.5, 14] }],
    ["path", { d: "M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" }],
    ["path", { d: "M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M14 16h2" }, { r: "growX", d: 0.2, o: [14, 16] }],
    ["path", { d: "M14 12h4" }, { r: "growX", d: 0.15, o: [14, 12] }],
  ],
});
