import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cooker" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cooker = createIcon("Cooker", "cooker", {
  nodes: [
    ["path", { d: "M12 7h.01" }, { r: "pop", d: 0.1, o: [12, 7] }],
    ["path", { d: "M15 7h.01" }, { r: "pop", d: 0.2, o: [15, 7] }],
    ["path", { d: "M9 7h.01" }, { r: "pop", o: [9, 7] }],
    ["path", { d: "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M9 15h6" }, { r: "growX", d: 0.25, o: [9, 15] }],
    ["path", { d: "M5 11h14" }],
  ],
});
