import { icon } from "../icon.js";

// Adapted from Tabler Icons "hospital-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HospitalCircle = icon("HospitalCircle", "hospital-circle", {
  nodes: [
    ["path", { d: "M10 16v-8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 16v-8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 12h4" }, { r: "draw", d: 0.25 }],
  ],
});
