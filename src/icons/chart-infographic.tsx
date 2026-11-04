import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chart-infographic" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChartInfographic = createIcon("ChartInfographic", "chart-infographic", {
  nodes: [
    ["path", { d: "M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }],
    ["path", { d: "M7 3v4h4" }, { r: "turn", a: 90, o: [7, 7] }],
    ["path", { d: "M9 17l0 4" }, { r: "grow", o: [9, 21] }],
    ["path", { d: "M17 14l0 7" }, { r: "grow", d: 0.2, o: [17, 21] }],
    ["path", { d: "M13 13l0 8" }, { r: "grow", d: 0.1, o: [13, 21] }],
    ["path", { d: "M21 12l0 9" }, { r: "grow", d: 0.3, o: [21, 21] }],
  ],
});
