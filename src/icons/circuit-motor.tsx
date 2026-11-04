import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-motor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitMotor = createIcon("CircuitMotor", "circuit-motor", {
  nodes: [
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M5 12h-3" }],
    ["path", { d: "M19 12h3" }],
    ["path", { d: "M10 14v-4l2 2l2 -2v4" }, { r: "shake", a: 0.6 }],
  ],
});
