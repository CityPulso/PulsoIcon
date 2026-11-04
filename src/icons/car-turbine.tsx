import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-turbine" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarTurbine = createIcon("CarTurbine", "car-turbine", {
  nodes: [
    ["path", { d: "M7 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "pulse", a: 0.06, o: [11, 13] }],
    ["path", { d: "M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" }],
    ["path", { d: "M11 9c2.489 .108 4.489 .108 6 0" }],
    ["path", { d: "M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6" }],
    ["path", { d: "M11 13l-3.5 -1.5" }, { r: "spin", o: [11, 13] }],
    ["path", { d: "M11 13l2.5 3" }, { r: "spin", o: [11, 13] }],
    ["path", { d: "M8.5 16l2.5 -3" }, { r: "spin", o: [11, 13] }],
    ["path", { d: "M11 13l3.5 -1.5" }, { r: "spin", o: [11, 13] }],
    ["path", { d: "M11 9v4" }, { r: "spin", o: [11, 13] }],
  ],
});
