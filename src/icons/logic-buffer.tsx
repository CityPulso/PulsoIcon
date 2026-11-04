import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "logic-buffer" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LogicBuffer = createIcon("LogicBuffer", "logic-buffer", {
  nodes: [
    ["path", { d: "M22 12h-5" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M2 9h5" }, { r: "draw" }],
    ["path", { d: "M2 15h5" }, { r: "draw" }],
    ["path", { d: "M7 5l10 7l-10 7l0 -14" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
  ],
});
