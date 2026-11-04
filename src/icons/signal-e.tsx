import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "signal-e" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SignalE = createIcon("SignalE", "signal-e", {
  nodes: [
    ["path", { d: "M14 8h-4v8h4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M10 12h2.5" }, { r: "growX", d: 0.3, o: [10, 12] }],
  ],
});
