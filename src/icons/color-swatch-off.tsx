import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "color-swatch-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ColorSwatchOff = createIcon("ColorSwatchOff", "color-swatch-off", {
  nodes: [
    ["path", { d: "M13 13v4a4 4 0 0 0 6.832 2.825m1.168 -2.825v-12a2 2 0 0 0 -2 -2h-4a2 2 0 0 0 -2 2v4" }],
    ["path", { d: "M13 7.35l-2 -2a2 2 0 0 0 -2.11 -.461m-2.13 1.874l-1.416 1.415a2 2 0 0 0 0 2.828l9 9" }, { r: "turn", a: -12, o: [12, 17] }],
    ["path", { d: "M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" }, { r: "turn", d: 0.05, a: -6, o: [12, 17] }],
    ["path", { d: "M17 17v.01" }, { r: "pop", d: 0.15, o: [17, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }, { r: "turn", a: -12, o: [12, 17] }],
    ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7", fill: "none" }, { r: "turn", d: 0.05, a: -6, o: [12, 17] }],
    ["path", { d: "M 7 17h.01" }, { r: "pop", d: 0.15, o: [17, 17] }, "line"],
    ["path", { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
