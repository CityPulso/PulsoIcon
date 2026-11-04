import { createIcon } from "../runtime/createIcon.js";

export const TicketPercent = createIcon("TicketPercent", "ticket-percent", {
  nodes: [
    ["path", { d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }, { r: "swing", a: 6, o: [2, 12] }],
    ["path", { d: "M9 9h.01" }, { r: "pop", d: 0.15, o: [9.005, 9] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M15 15h.01" }, { r: "pop", d: 0.22, o: [15.005, 15] }],
  ],
});
