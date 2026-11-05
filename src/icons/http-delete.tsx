import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-delete" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpDelete = createIcon("HttpDelete", "http-delete", {
  text: true,
  nodes: [
    ["path", { d: "M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M14 8h-4v8h4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M10 12h2.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17 8v8h4" }, { r: "draw", d: 0.24 }],
  ],
});
