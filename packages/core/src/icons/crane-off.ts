import { icon } from "../icon.js";

// Adapted from Tabler Icons "crane-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CraneOff = icon("CraneOff", "crane-off", {
  nodes: [
    ["path", { d: "M6 21h6" }],
    ["path", { d: "M9 21v-12" }],
    ["path", { d: "M9 5v-2l-1 1" }],
    ["path", { d: "M6 6l-3 3h6" }],
    ["path", { d: "M13 9h8" }, { r: "swing", d: 0, a: 5, o: [9, 3] }],
    ["path", { d: "M9 3l10 6" }, { r: "swing", d: 0, a: 5, o: [9, 3] }],
    ["path", { d: "M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" }, { r: "swing", d: 0.05, a: 12, o: [17, 9] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M6 21h6", fill: "none" }],
    ["path", { d: "M9 21v-18l-6 6h18", fill: "none" }],
    ["path", { d: "M9 3l10 6", fill: "none" }, { r: "swing", d: 0, a: 5, o: [9, 3] }],
    ["path", { d: "M17 9v4a2 2 0 1 1 -2 2", fill: "none" }, { r: "swing", d: 0.05, a: 12, o: [17, 9] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
