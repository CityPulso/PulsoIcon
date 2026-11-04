import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "database-smile" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DatabaseSmile = createIcon("DatabaseSmile", "database-smile", {
  nodes: [
    ["path", { d: "M10 14h.01" }, { r: "pop", d: 0.1, o: [10, 14] }],
    ["path", { d: "M14 14h.01" }, { r: "pop", d: 0.15, o: [14, 14] }],
    ["path", { d: "M10 17a3.5 3.5 0 0 0 4 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" }],
    ["path", { d: "M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12" }],
  ],
});
