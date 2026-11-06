import { icon } from "../icon.js";

// Adapted from Tabler Icons "checkup-list" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CheckupList = icon("CheckupList", "checkup-list", {
  nodes: [
    ["path", { d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" }, { r: "lift", y: -1 }],
    ["path", { d: "M9 14h.01" }, { r: "pop", d: 0.1, o: [9, 14] }],
    ["path", { d: "M9 17h.01" }, { r: "pop", d: 0.15, o: [9, 17] }],
    ["path", { d: "M12 16l1 1l3 -3" }, { r: "draw", d: 0.25 }],
  ],
});
