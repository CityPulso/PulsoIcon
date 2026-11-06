import { icon } from "../icon.js";

// Adapted from Tabler Icons "dialpad-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DialpadOff = icon("DialpadOff", "dialpad-off", {
  nodes: [
    ["path", { d: "M7 7h-4v-4" }, { r: "press", o: [5, 5] }],
    ["path", { d: "M17 3h4v4h-4l0 -4" }, { r: "press", d: 0.1, o: [19, 5] }],
    ["path", { d: "M10 6v-3h4v4h-3" }, { r: "press", d: 0.05, o: [12, 5] }],
    ["path", { d: "M3 10h4v4h-4l0 -4" }, { r: "press", d: 0.15, o: [5, 12] }],
    ["path", { d: "M17 13v-3h4v4h-3" }, { r: "press", d: 0.25, o: [19, 12] }],
    ["path", { d: "M14 14h-4v-4" }, { r: "press", d: 0.2, o: [12, 12] }],
    ["path", { d: "M10 17h4v4h-4l0 -4" }, { r: "press", d: 0.3, o: [12, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
