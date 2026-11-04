import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "truck-delivery" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TruckDelivery = createIcon("TruckDelivery", "truck-delivery", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [7, 17] }],
    ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [17, 17] }],
    ["path", { d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" }],
    ["path", { d: "M3 9l4 0" }, { r: "slide", x: -1, a: 1.5 }],
  ],
});
