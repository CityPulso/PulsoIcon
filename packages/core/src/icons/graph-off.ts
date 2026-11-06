import { icon } from "../icon.js";

// Adapted from Tabler Icons "graph-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GraphOff = icon("GraphOff", "graph-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" }],
    ["path", { d: "M7 14l3 -3l2 2l.5 -.5m2 -2l.5 -.5l2 2" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2" }],
    ["path", { d: "M7 14l3 -3l2 2l3 -3l2 2" }, { r: "draw" }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
