import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "signal-h-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SignalHPlus = createIcon("SignalHPlus", "signal-h-plus", {
  nodes: [
    ["path", { d: "M7 16v-8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M11 8v8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 12h4" }, { r: "growX", d: 0.25, o: [7, 12] }],
    ["path", { d: "M14 12h4" }, { r: "spin", d: 0.35, a: 90, o: [16, 12] }],
    ["path", { d: "M16 10v4" }, { r: "spin", d: 0.35, a: 90, o: [16, 12] }],
  ],
});
