import { icon } from "../icon.js";

// Adapted from Tabler Icons "skateboard-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SkateboardOff = icon("SkateboardOff", "skateboard-off", {
  nodes: [
    ["path", { d: "M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [7, 15] }],
    ["path", { d: "M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" }, { r: "spin", d: 0, o: [17, 15] }],
    ["path", { d: "M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M2 11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2", fill: "none" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1 }],
    ["circle", { cx: "7", cy: "17", r: "2" }, { r: "spin", d: 0, o: [7, 15] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "spin", d: 0, o: [17, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
