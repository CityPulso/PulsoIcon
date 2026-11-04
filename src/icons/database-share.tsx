import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "database-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DatabaseShare = createIcon("DatabaseShare", "database-share", {
  nodes: [
    ["path", { d: "M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" }],
    ["path", { d: "M4 6v6c0 1.657 3.582 3 8 3c.361 0 .716 -.009 1.065 -.026" }],
    ["path", { d: "M20 13v-7" }],
    ["path", { d: "M4 12v6c0 1.657 3.582 3 8 3" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 2 }],
  ],
});
