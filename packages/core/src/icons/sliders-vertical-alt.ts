import { icon } from "../icon.js";

// Adapted from Tabler Icons "adjustments-alt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalAlt = icon("SlidersVerticalAlt", "sliders-vertical-alt", {
  nodes: [
    ["path", { d: "M4 8h4v4h-4l0 -4" }, { r: "slide", x: 0, y: 1, a: 2, o: [6, 10] }],
    ["path", { d: "M6 4l0 4" }],
    ["path", { d: "M6 12l0 8" }],
    ["path", { d: "M10 14h4v4h-4l0 -4" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2, o: [12, 16] }],
    ["path", { d: "M12 4l0 10" }],
    ["path", { d: "M12 18l0 2" }],
    ["path", { d: "M16 5h4v4h-4l0 -4" }, { r: "slide", d: 0.2, x: 0, y: 1, a: 2, o: [18, 7] }],
    ["path", { d: "M18 4l0 1" }],
    ["path", { d: "M18 9l0 11" }],
  ],
});
