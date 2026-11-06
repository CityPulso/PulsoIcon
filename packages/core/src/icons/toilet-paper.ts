import { icon } from "../icon.js";

// Adapted from Tabler Icons "toilet-paper" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ToiletPaper = icon("ToiletPaper", "toilet-paper", {
  nodes: [
    ["path", { d: "M3 10a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" }, { r: "turn", a: 40, o: [6, 10] }],
    ["path", { d: "M21 10c0 -3.866 -1.343 -7 -3 -7" }],
    ["path", { d: "M6 3h12" }],
    ["path", { d: "M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1.5, o: [15, 14] }],
    ["path", { d: "M6 10h.01" }, { r: "turn", a: 40, o: [6, 10] }],
  ],
});
