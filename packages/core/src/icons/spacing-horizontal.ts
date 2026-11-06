import { icon } from "../icon.js";

// Adapted from Tabler Icons "spacing-horizontal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SpacingHorizontal = icon("SpacingHorizontal", "spacing-horizontal", {
  nodes: [
    ["path", { d: "M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M12 8v8" }, { r: "pulse", a: 0.15, o: [12, 12] }],
  ],
});
