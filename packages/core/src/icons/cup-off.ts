import { icon } from "../icon.js";

// Adapted from Tabler Icons "cup-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CupOff = icon("CupOff", "cup-off", {
  nodes: [
    ["path", { d: "M8 8h-3v3h6m4 0h4v-3h-7" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M15 5v-2" }, { r: "bounce", y: -1, a: 1, o: [15, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M5 8h14", fill: "none" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }, { r: "pulse", a: 0.04, o: [12, 14] }, "line"],
    ["path", { d: "m12 8 1-6h2", fill: "none" }, { r: "bounce", y: -1, a: 1, o: [15, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
