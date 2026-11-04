import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "adjustments-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SlidersVerticalShare = createIcon("SlidersVerticalShare", "sliders-vertical-share", {
  nodes: [
    ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 0, y: 1, a: 1.5, o: [6, 10] }],
    ["path", { d: "M6 4v4" }],
    ["path", { d: "M6 12v8" }],
    ["path", { d: "M13.387 14.56a2 2 0 1 0 -.798 3.352" }],
    ["path", { d: "M12 4v10" }],
    ["path", { d: "M12 18v2" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M18 4v1" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M18 9v4" }],
  ],
});
