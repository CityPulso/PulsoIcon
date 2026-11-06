import { icon } from "../icon.js";

// Adapted from Tabler Icons "cylinder-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CylinderPlus = icon("CylinderPlus", "cylinder-plus", {
  nodes: [
    ["path", { d: "M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
