import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "paywall" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Paywall = createIcon("Paywall", "paywall", {
  nodes: [
    ["path", { d: "M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10" }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }],
    ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, { r: "lift", y: -1 }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M19 21v1" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M19 14v1" }, { r: "draw", d: 0.3 }],
  ],
});
