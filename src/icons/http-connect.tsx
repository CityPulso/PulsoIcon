import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-connect" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpConnect = createIcon("HttpConnect", "http-connect", {
  text: true,
  nodes: [
    ["path", { d: "M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M17 16v-8l4 8v-8" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.12 }],
  ],
});
