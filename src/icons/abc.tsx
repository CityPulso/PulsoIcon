import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "abc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Abc = createIcon("Abc", "abc", {
  text: true,
  nodes: [
    ["path", { d: "M3 16v-6a2 2 0 1 1 4 0v6" }, { r: "draw" }],
    ["path", { d: "M3 13h4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" }, { r: "draw", d: 0.25 }],
  ],
});
