import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "auth-2fa" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Auth2fa = createIcon("Auth2fa", "auth-2fa", {
  nodes: [
    ["path", { d: "M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" }, { r: "draw" }],
    ["path", { d: "M10 16v-8h4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 12l3 0" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M17 16v-6a2 2 0 0 1 4 0v6" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M17 13l4 0" }, { r: "draw", d: 0.45 }],
  ],
});
