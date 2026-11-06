import { icon } from "../icon.js";

// Adapted from Tabler Icons "meter-cube" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MeterCube = icon("MeterCube", "meter-cube", {
  nodes: [
    ["path", { d: "M17 5h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" }, { r: "pop", d: 0.35, o: [18.5, 8] }],
    ["path", { d: "M4 12v6" }, { r: "draw" }],
    ["path", { d: "M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" }, { r: "draw", d: 0.2 }],
  ],
});
