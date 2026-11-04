import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "adjustments-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalPin = createIcon("SlidersVerticalPin", "sliders-vertical-pin", {
  nodes: [
    ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M6 4v4" }],
    ["path", { d: "M6 12v8" }],
    ["path", { d: "M13.071 14.31a2 2 0 1 0 -1.071 3.69" }],
    ["path", { d: "M12 4v10" }],
    ["path", { d: "M12 18v2" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M18 4v1" }],
    ["path", { d: "M18 9v2.5" }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
  ],
});
