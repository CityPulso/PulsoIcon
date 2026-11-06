import { icon } from "../icon.js";

// Adapted from Tabler Icons "direction-arrows" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DirectionArrows = icon("DirectionArrows", "direction-arrows", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M8 11l-1 1l1 1" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M11 8l1 -1l1 1" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M16 11l1 1l-1 1" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M11 16l1 1l1 -1" }, { r: "slide", y: 1, a: 1.5 }],
  ],
});
