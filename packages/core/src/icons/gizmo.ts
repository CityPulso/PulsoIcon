import { icon } from "../icon.js";

// Adapted from Tabler Icons "gizmo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Gizmo = icon("Gizmo", "gizmo", {
  nodes: [
    ["path", { d: "M20 19l-8 -5.5l-8 5.5" }, { r: "draw" }],
    ["path", { d: "M12 4v9.5" }, { r: "draw" }],
    ["path", { d: "M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.3, o: [12, 4] }],
    ["path", { d: "M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.35, o: [4, 19] }],
    ["path", { d: "M19 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.4, o: [20, 19] }],
  ],
});
