import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserCode = createIcon("UserCode", "user-code", {
  nodes: [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h3.5" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [19, 19] }],
  ],
});
