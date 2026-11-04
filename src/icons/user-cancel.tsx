import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserCancel = createIcon("UserCancel", "user-cancel", {
  nodes: [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h3.5" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "draw", d: 0.15, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25, o: [19, 19] }],
  ],
});
