import { icon } from "../icon.js";

// Adapted from Tabler Icons "logic-nor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LogicNor = icon("LogicNor", "logic-nor", {
  nodes: [
    ["path", { d: "M22 12h-4" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M2 9h5" }, { r: "draw" }],
    ["path", { d: "M2 15h5" }, { r: "draw" }],
    ["path", { d: "M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" }, { r: "press", d: 0.15, a: 0.08, o: [12, 12] }],
    ["path", { d: "M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [16, 12] }],
  ],
});
