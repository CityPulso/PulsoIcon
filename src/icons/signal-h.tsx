import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "signal-h" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SignalH = createIcon("SignalH", "signal-h", {
  nodes: [
    ["path", { d: "M10 16v-8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 12h4" }, { r: "growX", d: 0.3, o: [10, 12] }],
  ],
});
