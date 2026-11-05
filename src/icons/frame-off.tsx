import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "frame-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FrameOff = createIcon("FrameOff", "frame-off", {
  nodes: [
    ["path", { d: "M4 7h3m4 0h9" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M4 17h13" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M7 7v13" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 4v9m0 4v3" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["line", { x1: "22", x2: "2", y1: "6", y2: "6", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["line", { x1: "22", x2: "2", y1: "18", y2: "18", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["line", { x1: "6", x2: "6", y1: "2", y2: "22", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["line", { x1: "18", x2: "18", y1: "2", y2: "22", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
