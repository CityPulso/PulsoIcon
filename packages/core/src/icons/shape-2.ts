import { icon } from "../icon.js";

// Adapted from Tabler Icons "shape-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Shape2 = icon("Shape2", "shape-2", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [19, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "M6.5 17.5l11 -11m-12.5 .5v10m14 -10v10" }, { r: "draw", d: 0.1 }],
  ],
});
