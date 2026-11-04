import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "route-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouteX = createIcon("RouteX", "route-x", {
  nodes: [
    ["path", { d: "M3 17l4 4" }, { r: "draw" }],
    ["path", { d: "M7 17l-4 4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M17 3l4 4" }, { r: "draw", d: 0.5 }],
    ["path", { d: "M21 3l-4 4" }, { r: "draw", d: 0.55 }],
    ["path", { d: "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" }, { r: "draw", d: 0.1 }],
  ],
});
