import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transform-point-top-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransformPointTopRight = createIcon("TransformPointTopRight", "transform-point-top-right", {
  nodes: [
    ["path", { d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2", fill: "currentColor" }, { r: "pulse", a: 0.3, o: [19, 5] }],
    ["path", { d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }],
    ["path", { d: "M11 5h2" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M5 11v2" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M19 11v2" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M11 19h2" }, { r: "fade", d: 0.15 }],
  ],
});
