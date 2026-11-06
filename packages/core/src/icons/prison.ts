import { icon } from "../icon.js";

// Adapted from Tabler Icons "prison" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Prison = icon("Prison", "prison", {
  nodes: [
    ["path", { d: "M18 4v16" }, { r: "grow", d: 0.1, o: [18, 20] }],
    ["path", { d: "M14 4v16" }, { r: "grow", o: [14, 20] }],
    ["path", { d: "M6 4v5" }],
    ["path", { d: "M6 15v5" }],
    ["path", { d: "M10 4v5" }],
    ["path", { d: "M11 9h-6v6h6l0 -6" }],
    ["path", { d: "M10 15v5" }],
    ["path", { d: "M8 12h-.01" }, { r: "pop", d: 0.3, o: [8, 12] }],
  ],
});
