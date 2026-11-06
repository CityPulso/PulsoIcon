import { icon } from "../icon.js";

// Adapted from Tabler Icons "line" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Line = icon("Line", "line", {
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [6, 18] }],
    ["path", { d: "M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [18, 6] }],
    ["path", { d: "M7.5 16.5l9 -9" }, { r: "draw", d: 0.1 }],
  ],
});
