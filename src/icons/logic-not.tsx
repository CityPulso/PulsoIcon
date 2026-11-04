import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "logic-not" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LogicNot = createIcon("LogicNot", "logic-not", {
  nodes: [
    ["path", { d: "M22 12h-3" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M2 9h3" }, { r: "draw" }],
    ["path", { d: "M2 15h3" }, { r: "draw" }],
    ["path", { d: "M5 5l10 7l-10 7l0 -14" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
    ["path", { d: "M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [17, 12] }],
  ],
});
