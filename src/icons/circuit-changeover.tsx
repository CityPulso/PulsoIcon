import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-changeover" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitChangeover = createIcon("CircuitChangeover", "circuit-changeover", {
  nodes: [
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M20 7h2" }],
    ["path", { d: "M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M20 17h2" }],
    ["path", { d: "M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M7.5 10.5l8.5 -3.5" }, { r: "turn", a: 55, o: [7.5, 10.5] }],
  ],
});
