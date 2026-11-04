import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bike-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BikeOff = createIcon("BikeOff", "bike-off", {
  nodes: [
    ["path", { d: "M2 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", d: 0, o: [5, 18] }],
    ["path", { d: "M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3" }, { r: "spin", d: 0, o: [19, 18] }],
    ["path", { d: "M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3" }],
    ["path", { d: "M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
