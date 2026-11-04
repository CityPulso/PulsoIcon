import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "navigation-east" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NavigationEast = createIcon("NavigationEast", "navigation-east", {
  nodes: [
    ["path", { d: "M14 3h-4v6h4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 6h2.5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M16 21l-4 -8l-4 8l4 -2l4 2" }, { r: "slide", x: 0, y: -1, a: 1.5 }],
  ],
});
