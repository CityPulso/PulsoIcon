import { icon } from "../icon.js";

// Adapted from Tabler Icons "augmented-reality" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AugmentedReality = icon("AugmentedReality", "augmented-reality", {
  nodes: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -1, y: -1, a: 1 }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "slide", x: -1, y: 1, a: 1 }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 1, y: -1, a: 1 }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "slide", x: 1, y: 1, a: 1 }],
    ["path", { d: "M12 12.5l4 -2.5" }, { r: "turn", d: 0.1, a: 20, o: [12, 13.5] }],
    ["path", { d: "M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5l-4 2.5" }, { r: "turn", d: 0.1, a: 20, o: [12, 13.5] }],
    ["path", { d: "M8 10v4.5l4 2.5" }, { r: "turn", d: 0.1, a: 20, o: [12, 13.5] }],
  ],
});
