import { icon } from "../icon.js";

// Adapted from Tabler Icons "typography-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TypographyOff = icon("TypographyOff", "typography-off", {
  text: true,
  nodes: [
    ["path", { d: "M4 20h3" }, { r: "draw", d: 0 }],
    ["path", { d: "M14 20h6" }, { r: "draw", d: 0 }],
    ["path", { d: "M6.9 15h6.9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 13l3 7" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M5 20l4.09 -10.906" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M10.181 6.183l.819 -2.183h2l3.904 8.924" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M4 20l3 0", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "M14 20l7 0", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "M6.9 15l6.9 0", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10.2 6.3l5.8 13.7", fill: "none" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M5 20l6 -16l2 0l7 16", fill: "none" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
