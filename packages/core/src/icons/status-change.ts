import { icon } from "../icon.js";

// Adapted from Tabler Icons "status-change" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StatusChange = icon("StatusChange", "status-change", {
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", a: 0.15, o: [6, 18] }],
    ["path", { d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.45, a: 0.25, o: [18, 18] }],
    ["path", { d: "M6 12v-2a6 6 0 1 1 12 0v2" }, { r: "draw" }],
    ["path", { d: "M15 9l3 3l3 -3" }, { r: "slide", d: 0.3, x: 0, y: 1, a: 1.5, o: [18, 10.5] }],
  ],
});
