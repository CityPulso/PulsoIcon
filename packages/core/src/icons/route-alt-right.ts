import { icon } from "../icon.js";

// Adapted from Tabler Icons "route-alt-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouteAltRight = icon("RouteAltRight", "route-alt-right", {
  nodes: [
    ["path", { d: "M16 3h5v5" }],
    ["path", { d: "M8 3h-5v5" }],
    ["path", { d: "M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" }, { r: "drawBack" }],
    ["path", { d: "M6 6.01v-.01" }, { r: "pop", d: 0.15, o: [6, 6] }],
    ["path", { d: "M8 8.02v-.01" }, { r: "pop", d: 0.25, o: [8, 8] }],
    ["path", { d: "M10 10v.01" }, { r: "pop", d: 0.35, o: [10, 10] }],
  ],
});
