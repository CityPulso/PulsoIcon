import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseCancel = createIcon("HouseCancel", "house-cancel", {
  nodes: [
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.58 0 1.103 .247 1.468 .642" }],
  ],
});
