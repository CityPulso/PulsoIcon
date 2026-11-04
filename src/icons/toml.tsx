import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "toml" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Toml = createIcon("Toml", "toml", {
  nodes: [
    ["path", { d: "M1.499 8h3" }, { r: "draw" }],
    ["path", { d: "M2.999 8v8" }, { r: "draw" }],
    ["path", { d: "M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 16v-8l2 5l2 -5v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20 8v8h2.5" }, { r: "draw", d: 0.3 }],
  ],
});
