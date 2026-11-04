import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "users-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UsersMinus = createIcon("UsersMinus", "users-minus", {
  nodes: [
    ["path", { d: "M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [9, 7] }],
    ["path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }, { r: "bounce", d: 0.08, x: 0, y: -1, a: 1, o: [16, 7] }],
    ["path", { d: "M16 19h6" }, { r: "draw", d: 0.1, o: [19, 19] }],
  ],
});
