import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "logic-xor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LogicXor = createIcon("LogicXor", "logic-xor", {
  nodes: [
    ["path", { d: "M22 12h-4" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M2 9h6" }, { r: "draw" }],
    ["path", { d: "M2 15h6" }, { r: "draw" }],
    ["path", { d: "M7 19c1.778 -4.667 1.778 -9.333 0 -14" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
    ["path", { d: "M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
  ],
});
