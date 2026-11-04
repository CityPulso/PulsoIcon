import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "route-square" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouteSquare = createIcon("RouteSquare", "route-square", {
  nodes: [
    ["path", { d: "M3 17h4v4h-4l0 -4" }, { r: "pop", o: [5, 19] }],
    ["path", { d: "M17 3h4v4h-4l0 -4" }, { r: "pop", d: 0.5, o: [19, 5] }],
    ["path", { d: "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" }, { r: "draw", d: 0.1 }],
  ],
});
