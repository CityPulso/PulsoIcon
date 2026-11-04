import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "navigation-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NavigationCancel = createIcon("NavigationCancel", "navigation-cancel", {
  nodes: [
    ["path", { d: "M16.371 12.476l-4.371 -9.476l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
