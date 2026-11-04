import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "plug-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlugOff = createIcon("PlugOff", "plug-off", {
  nodes: [
    ["path", { d: "M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M4 20l3.5 -3.5" }, { r: "slide", x: -0.7, y: 0.7, a: 1, o: [5.7, 18.3] }],
    ["path", { d: "M15 4l-3.5 3.5" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M20 9l-3.5 3.5" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
