import { icon } from "../icon.js";

// Adapted from Tabler Icons "alarm-average" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlarmAverage = icon("AlarmAverage", "alarm-average", {
  nodes: [
    ["path", { d: "M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" }, { r: "shake", a: 0.4 }],
    ["path", { d: "M7 4l-2.75 2" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M17 4l2.75 2" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M8 13h1l2 3l2 -6l2 3h1" }, { r: "draw" }],
  ],
});
