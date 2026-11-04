import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserExclamation = createIcon("UserExclamation", "user-exclamation", {
  nodes: [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" }],
    ["path", { d: "M19 16v3" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.2, o: [19, 22] }],
  ],
});
