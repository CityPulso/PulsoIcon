import { icon } from "../icon.js";

// Adapted from Tabler Icons "underline-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UnderlineOff = icon("UnderlineOff", "underline-off", {
  text: true,
  nodes: [
    ["path", { d: "M7 7.4v2.6c0 2.8 2.2 5 5 5c.9 0 1.8 -.2 2.4 -.6" }, { r: "draw", d: 0 }],
    ["path", { d: "M5 19h14" }, { r: "growX", d: 0.1, o: [12, 19] }],
    ["path", { d: "M3 2.7l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16.4 12.4c.4 -.7 .6 -1.5 .6 -2.4v-5" }, { r: "draw", d: 0 }],
  ],
  solid: [
    ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", fill: "none" }, { r: "draw", d: 0 }],
    ["line", { x1: "4", x2: "20", y1: "20", y2: "20", fill: "none" }, { r: "growX", d: 0.1, o: [12, 19] }],
    ["path", { d: "M3 2.7l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
