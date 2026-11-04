import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "navigation-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NavigationDown = createIcon("NavigationDown", "navigation-down", {
  nodes: [
    ["path", { d: "M16.528 12.815l-4.528 -9.815l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
