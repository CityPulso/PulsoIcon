import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserPin = createIcon("UserPin", "user-pin", {
  nodes: [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h2.5" }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [19, 19] }],
  ],
});
