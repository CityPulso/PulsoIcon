import { icon } from "../icon.js";

// Adapted from Tabler Icons "zoom-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ZoomQuestion = icon("ZoomQuestion", "zoom-question", {
  nodes: [
    ["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "tilt", a: 12, o: [10, 10] }],
    ["path", { d: "M21 21l-6 -6" }, { r: "tilt", a: 12, o: [10, 10] }],
    ["path", { d: "M10 13l0 .01" }, { r: "pop", d: 0.4, o: [10, 13] }],
    ["path", { d: "M10 10a1.5 1.5 0 1 0 -1.14 -2.474" }, { r: "draw", d: 0.1 }],
  ],
});
