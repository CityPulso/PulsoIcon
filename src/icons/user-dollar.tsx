import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserDollar = createIcon("UserDollar", "user-dollar", {
  nodes: [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h3" }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "draw", d: 0.2, o: [19, 19] }],
  ],
});
