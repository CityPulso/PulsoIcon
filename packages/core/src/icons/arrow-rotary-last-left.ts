import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-rotary-last-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRotaryLastLeft = icon("ArrowRotaryLastLeft", "arrow-rotary-last-left", {
  nodes: [
    ["path", { d: "M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" }, { r: "spin", o: [15, 12] }],
    ["path", { d: "M15 15v6" }, { r: "draw", o: [15, 18] }],
    ["path", { d: "M12.5 9.5l-6.5 -6.5" }, { r: "slide", d: 0.15, x: -1, y: -1, a: 1.5, o: [9, 6] }],
    ["path", { d: "M11 3h-5v5" }, { r: "slide", d: 0.15, x: -1, y: -1, a: 1.5, o: [8, 5.5] }],
  ],
});
