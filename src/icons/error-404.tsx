import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "error-404" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Error404 = createIcon("Error404", "error-404", {
  nodes: [
    ["path", { d: "M3 8v3a1 1 0 0 0 1 1h3" }, { r: "draw" }],
    ["path", { d: "M7 8v8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M17 8v3a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M21 8v8" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" }, { r: "shake", d: 0.15, a: 1.5, o: [12, 12] }],
  ],
});
