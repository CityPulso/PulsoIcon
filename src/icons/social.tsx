import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "social" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Social = createIcon("Social", "social", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [12, 5] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [5, 19] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [19, 19] }],
    ["path", { d: "M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", o: [12, 14] }],
    ["path", { d: "M12 7l0 4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6.7 17.8l2.8 -2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M17.3 17.8l-2.8 -2" }, { r: "draw", d: 0.3 }],
  ],
});
