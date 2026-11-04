import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transform-point" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransformPoint = createIcon("TransformPoint", "transform-point", {
  nodes: [
    ["path", { d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", a: 0.2, o: [5, 5] }],
    ["path", { d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.05, a: 0.2, o: [5, 19] }],
    ["path", { d: "M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.1, a: 0.2, o: [19, 5] }],
    ["path", { d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" }, { r: "pop", d: 0.15000000000000002, a: 0.2, o: [19, 19] }],
    ["path", { d: "M11 5h2" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M5 11v2" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M19 11v2" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M11 19h2" }, { r: "fade", d: 0.2 }],
  ],
});
