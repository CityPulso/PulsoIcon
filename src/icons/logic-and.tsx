import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "logic-and" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LogicAnd = createIcon("LogicAnd", "logic-and", {
  nodes: [
    ["path", { d: "M22 12h-5" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M2 9h5" }, { r: "draw" }],
    ["path", { d: "M2 15h5" }, { r: "draw" }],
    ["path", { d: "M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
  ],
});
