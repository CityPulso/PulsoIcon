import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-sad-squint" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSadSquint = icon("FaceSadSquint", "face-sad-squint", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0" }, { r: "drop", d: 0.15, x: 0, y: -1, a: 1.5, o: [12, 15.5] }],
    ["path", { d: "M8.5 11.5l1.5 -1.5l-1.5 -1.5" }, { r: "press", a: 0.3, o: [9.25, 10] }],
    ["path", { d: "M15.5 11.5l-1.5 -1.5l1.5 -1.5" }, { r: "press", a: 0.3, o: [14.75, 10] }],
  ],
});
