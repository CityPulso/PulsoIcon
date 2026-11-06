import { icon } from "../icon.js";

// Adapted from Tabler Icons "car-off-road" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarOffRoad = icon("CarOffRoad", "car-off-road", {
  nodes: [
    ["path", { d: "M9 17h6" }, { r: "bounce", d: 0.05, y: -1, a: 1 }],
    ["path", { d: "M9 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "bounce", y: -1, a: 1.5 }],
    ["path", { d: "M19 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" }, { r: "bounce", d: 0.15, y: -1, a: 1.5 }],
    ["path", { d: "M17 10l-2 -3" }, { r: "bounce", d: 0.05, y: -1, a: 1 }],
    [
      "path",
      { d: "M19 17h2v-5a2 2 0 0 0 -2 -2h-5v2h-2.586a1 1 0 0 1 -.707 -.293l-1.121 -1.121a2 2 0 0 0 -1.414 -.586h-4.172a1 1 0 0 0 -1 1v6h2" },
      { r: "bounce", d: 0.05, y: -1, a: 1 },
    ],
  ],
});
