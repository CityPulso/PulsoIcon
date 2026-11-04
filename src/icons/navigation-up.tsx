import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "navigation-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NavigationUp = createIcon("NavigationUp", "navigation-up", {
  nodes: [
    ["path", { d: "M16.54 12.843l-4.54 -9.843l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2 }],
  ],
});
