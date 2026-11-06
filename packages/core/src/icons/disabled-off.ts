import { icon } from "../icon.js";

// Adapted from Tabler Icons "disabled-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DisabledOff = icon("DisabledOff", "disabled-off", {
  nodes: [
    ["path", { d: "M11 7a2 2 0 1 0 -2 -2" }, { r: "bounce", y: -1, a: 1, o: [10, 5] }],
    ["path", { d: "M11 11v4h4l4 5" }, { r: "pulse", a: 0.03, o: [15, 15] }],
    ["path", { d: "M15 11h1" }, { r: "pulse", a: 0.03, o: [15, 15] }],
    ["path", { d: "M7 11.5a5 5 0 1 0 6 7.5" }, { r: "roll", x: 1, a: 1, o: [8.9, 16.1] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "bounce", y: -1, a: 1, o: [10, 5] }],
    ["path", { d: "M11 7l0 8l4 0l4 5", fill: "none" }, { r: "pulse", a: 0.03, o: [15, 15] }],
    ["path", { d: "M11 11l5 0", fill: "none" }, { r: "pulse", a: 0.03, o: [15, 15] }],
    ["path", { d: "M7 11.5a5 5 0 1 0 6 7.5", fill: "none" }, { r: "roll", x: 1, a: 1, o: [8.9, 16.1] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
