import { icon } from "../icon.js";

// Adapted from Tabler Icons "antenna-bars-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AntennaBarsOff = icon("AntennaBarsOff", "antenna-bars-off", {
  nodes: [
    ["path", { d: "M6 18v-3" }, { r: "grow", o: [6, 18] }],
    ["path", { d: "M10 18v-6" }, { r: "grow", d: 0.06, o: [10, 18] }],
    ["path", { d: "M14 18v-4" }, { r: "grow", d: 0.12, o: [14, 18] }],
    ["path", { d: "M14 10v-1" }, { r: "grow", d: 0.12, o: [14, 18] }],
    ["path", { d: "M18 14v-8" }, { r: "grow", d: 0.18, o: [18, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
