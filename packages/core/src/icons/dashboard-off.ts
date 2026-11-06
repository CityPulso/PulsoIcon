import { icon } from "../icon.js";

// Adapted from Tabler Icons "dashboard-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DashboardOff = icon("DashboardOff", "dashboard-off", {
  nodes: [
    ["path", { d: "M11.175 11.178a2 2 0 1 0 2.653 2.634" }, { r: "pop", o: [12.5, 12.5] }],
    ["path", { d: "M14.5 10.5l1 -1" }, { r: "turn", a: -40, o: [12, 12] }],
    ["path", { d: "M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488a9.008 9.008 0 0 1 -1.226 1.18h-11.2a9 9 0 0 1 -.268 -13.87" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12.5, 12.5] }, "cut"],
    ["path", { d: "M13.45 11.55l2.05 -2.05" }, { r: "turn", a: -40, o: [12, 12] }, "line"],
    ["path", { d: "M6.4 20a9 9 0 1 1 11.2 0l-11.2 0" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
