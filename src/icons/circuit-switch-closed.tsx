import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-switch-closed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitSwitchClosed = createIcon("CircuitSwitchClosed", "circuit-switch-closed", {
  nodes: [
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M20 12h2" }],
    ["path", { d: "M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M8 12h8" }, { r: "draw" }],
  ],
});
