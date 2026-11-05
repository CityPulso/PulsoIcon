import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "italic-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ItalicOff = createIcon("ItalicOff", "italic-off", {
  text: true,
  nodes: [
    ["path", { d: "M11 5h6" }, { r: "draw", d: 0 }],
    ["path", { d: "M7 19h6" }, { r: "draw", d: 0 }],
    ["path", { d: "M11.8 12.9l-1.8 6.1" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M2.8 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14 5l-1.2 4.1" }, { r: "draw", d: 0.05 }],
  ],
  solid: [
    ["line", { x1: "19", x2: "10", y1: "4", y2: "4", fill: "none" }, { r: "draw", d: 0 }],
    ["line", { x1: "14", x2: "5", y1: "20", y2: "20", fill: "none" }, { r: "draw", d: 0 }],
    ["line", { x1: "15", x2: "9", y1: "4", y2: "20", fill: "none" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M2.8 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
