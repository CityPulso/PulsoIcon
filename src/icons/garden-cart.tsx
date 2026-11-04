import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "garden-cart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GardenCart = createIcon("GardenCart", "garden-cart", {
  nodes: [
    ["path", { d: "M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, { r: "spin", o: [17.5, 17.5] }],
    ["path", { d: "M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" }, { r: "turn", a: -6, o: [17.5, 17.5] }],
    ["path", { d: "M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" }, { r: "turn", a: -6, o: [17.5, 17.5] }],
  ],
});
