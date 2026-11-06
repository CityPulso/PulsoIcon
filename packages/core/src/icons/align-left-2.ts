import { icon } from "../icon.js";

// Adapted from Tabler Icons "align-left-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlignLeft2 = icon("AlignLeft2", "align-left-2", {
  nodes: [
    ["path", { d: "M4 4v16" }],
    ["path", { d: "M8 6h12" }, { r: "growX", o: [8, 6] }],
    ["path", { d: "M8 12h6" }, { r: "growX", d: 0.08, o: [8, 12] }],
    ["path", { d: "M8 18h10" }, { r: "growX", d: 0.16, o: [8, 18] }],
  ],
});
