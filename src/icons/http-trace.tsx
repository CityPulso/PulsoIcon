import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-trace" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpTrace = createIcon("HttpTrace", "http-trace", {
  nodes: [
    ["path", { d: "M3 8h4" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M5 8v8" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M10 12h2a2 2 0 1 0 0 -4h-2v8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M14 16l-3 -4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17 16v-6a2 2 0 1 1 4 0v6" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M17 13h4" }, { r: "draw", d: 0.24 }],
  ],
});
