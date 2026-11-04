import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartCancel = createIcon("HeartCancel", "heart-cancel", {
  nodes: [
    ["path", { d: "M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 7.993 6.01" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
