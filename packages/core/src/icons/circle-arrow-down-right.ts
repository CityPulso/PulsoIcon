import { icon } from "../icon.js";

// Adapted from Tabler Icons "circle-arrow-down-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleArrowDownRight = icon("CircleArrowDownRight", "circle-arrow-down-right", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M15 15h-6" }, { r: "slide", x: 0.7, y: 0.7, a: 2, o: [12, 12] }],
    ["path", { d: "M15 9v6l-6 -6" }, { r: "slide", x: 0.7, y: 0.7, a: 2, o: [12, 12] }],
  ],
});
