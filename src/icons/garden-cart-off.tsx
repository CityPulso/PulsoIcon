import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "garden-cart-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GardenCartOff = createIcon("GardenCartOff", "garden-cart-off", {
  nodes: [
    ["path", { d: "M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" }, { r: "spin", d: 0, o: [17.5, 17.5] }],
    ["path", { d: "M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, { r: "spin", d: 0, o: [17.5, 17.5] }],
    ["path", { d: "M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
