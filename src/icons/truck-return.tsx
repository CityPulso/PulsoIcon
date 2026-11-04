import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "truck-return" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TruckReturn = createIcon("TruckReturn", "truck-return", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: -360, o: [7, 17] }],
    ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: -360, o: [17, 17] }],
    ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M9 17l6 0" }],
    ["path", { d: "M13 6h5l3 5v6h-2" }],
  ],
});
