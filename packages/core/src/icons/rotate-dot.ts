import { icon } from "../icon.js";

// Adapted from Tabler Icons "rotate-dot" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RotateDot = icon("RotateDot", "rotate-dot", {
  nodes: [
    ["path", { d: "M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.3, o: [12, 12] }],
  ],
});
