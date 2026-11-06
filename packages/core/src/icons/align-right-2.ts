import { icon } from "../icon.js";

// Adapted from Tabler Icons "align-right-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignRight2 = icon("AlignRight2", "align-right-2", {
  nodes: [
    ["path", { d: "M20 4v16" }],
    ["path", { d: "M4 6h12" }, { r: "growX", o: [16, 6] }],
    ["path", { d: "M10 12h6" }, { r: "growX", d: 0.08, o: [16, 12] }],
    ["path", { d: "M6 18h10" }, { r: "growX", d: 0.16, o: [16, 18] }],
  ],
});
