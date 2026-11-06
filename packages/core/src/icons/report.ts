import { icon } from "../icon.js";

// Adapted from Tabler Icons "report" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Report = icon("Report", "report", {
  nodes: [
    ["path", { d: "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" }],
    ["path", { d: "M18 14v4h4" }, { r: "spin", o: [18, 18] }],
    ["path", { d: "M18 11v-4a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }],
    ["path", { d: "M8 11h4" }, { r: "growX", o: [8, 11] }],
    ["path", { d: "M8 15h3" }, { r: "growX", d: 0.15, o: [8, 15] }],
  ],
});
