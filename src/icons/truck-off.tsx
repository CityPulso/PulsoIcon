import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "truck-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TruckOff = createIcon("TruckOff", "truck-off", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [7, 17] }],
    ["path", { d: "M15.585 15.586a2 2 0 0 0 2.826 2.831" }, { r: "spin", d: 0, o: [17, 17] }],
    ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
