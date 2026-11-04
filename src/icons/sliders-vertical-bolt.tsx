import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "adjustments-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalBolt = createIcon("SlidersVerticalBolt", "sliders-vertical-bolt", {
  nodes: [
    ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M6 4v4" }],
    ["path", { d: "M6 12v8" }],
    ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12 4v10" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1, o: [19, 19] }],
    ["path", { d: "M12 18v2" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M18 4v1" }],
    ["path", { d: "M18 9v3" }],
  ],
});
