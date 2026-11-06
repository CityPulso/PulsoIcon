import { icon } from "../icon.js";

// Adapted from Tabler Icons "plus-equal" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlusEqual = icon("PlusEqual", "plus-equal", {
  nodes: [
    ["path", { d: "M4 7h6" }, { r: "spin", a: 90, o: [7, 7] }],
    ["path", { d: "M7 4v6" }, { r: "spin", a: 90, o: [7, 7] }],
    ["path", { d: "M20 16h-6" }, { r: "growX", d: 0.25, o: [14, 16] }],
    ["path", { d: "M20 19h-6" }, { r: "growX", d: 0.3, o: [14, 19] }],
    ["path", { d: "M5 19l14 -14" }, { r: "draw", d: 0.1 }],
  ],
});
