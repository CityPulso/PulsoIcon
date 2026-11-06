import { icon } from "../icon.js";

// Adapted from Tabler Icons "blind" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Blind = icon("Blind", "blind", {
  nodes: [
    ["path", { d: "M9 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M4 21l3 -4" }, { r: "tilt", a: 10, o: [7, 17] }],
    ["path", { d: "M13 21l-2 -4l-3 -3l1 -6" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M3 12l2 -3l4 -1l6 4" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M16.5 14l3.5 7" }, { r: "tilt", d: 0.1, a: -10, o: [16.5, 14] }],
  ],
});
