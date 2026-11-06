import { icon } from "../icon.js";

// Adapted from Tabler Icons "dimensions" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Dimensions = icon("Dimensions", "dimensions", {
  nodes: [
    ["path", { d: "M3 5h11" }, { r: "drawOut" }],
    ["path", { d: "M12 7l2 -2l-2 -2" }, { r: "pop", d: 0.3, o: [13, 5] }],
    ["path", { d: "M5 3l-2 2l2 2" }, { r: "pop", d: 0.3, o: [4, 5] }],
    ["path", { d: "M19 10v11" }, { r: "drawOut", d: 0.15 }],
    ["path", { d: "M17 19l2 2l2 -2" }, { r: "pop", d: 0.45, o: [19, 20] }],
    ["path", { d: "M21 12l-2 -2l-2 2" }, { r: "pop", d: 0.45, o: [19, 11] }],
    ["path", { d: "M3 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7" }],
  ],
});
