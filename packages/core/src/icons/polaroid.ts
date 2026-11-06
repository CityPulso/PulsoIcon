import { icon } from "../icon.js";

// Adapted from Tabler Icons "polaroid" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Polaroid = icon("Polaroid", "polaroid", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }, { r: "press", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M4 16l16 0" }, { r: "growX", d: 0.1, o: [4, 16] }],
    ["path", { d: "M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M14 7l.01 0" }, { r: "pop", d: 0.3, o: [14, 7] }],
  ],
});
