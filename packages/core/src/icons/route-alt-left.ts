import { icon } from "../icon.js";

// Adapted from Tabler Icons "route-alt-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouteAltLeft = icon("RouteAltLeft", "route-alt-left", {
  nodes: [
    ["path", { d: "M8 3h-5v5" }],
    ["path", { d: "M16 3h5v5" }],
    ["path", { d: "M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" }, { r: "drawBack" }],
    ["path", { d: "M18 6.01v-.01" }, { r: "pop", d: 0.15, o: [18, 6] }],
    ["path", { d: "M16 8.02v-.01" }, { r: "pop", d: 0.25, o: [16, 8] }],
    ["path", { d: "M14 10v.01" }, { r: "pop", d: 0.35, o: [14, 10] }],
  ],
});
