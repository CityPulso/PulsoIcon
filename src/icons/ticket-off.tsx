import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ticket-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TicketOff = createIcon("TicketOff", "ticket-off", {
  nodes: [
    ["path", { d: "M15 5v2" }, { r: "pop", d: 0.2, o: [15, 6] }],
    ["path", { d: "M15 17v2" }, { r: "pop", d: 0.25, o: [15, 18] }],
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 1 0 0 -4v-3a2 2 0 0 1 2 -2" }, { r: "wobble", a: 5, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }, { r: "wobble", a: 5, o: [12, 12] }],
    ["path", { d: "M13 5v2" }, { r: "pop", d: 0.2, o: [15, 6] }, "line"],
    ["path", { d: "M13 17v2" }, { r: "pop", d: 0.25, o: [15, 18] }, "line"],
    ["path", { d: "M13 11v2" }, { r: "pop", d: 0.2, o: [15, 6] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
