import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "grave" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Grave = createIcon("Grave", "grave", {
  nodes: [
    ["path", { d: "M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14" }],
    ["path", { d: "M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5" }, { r: "rise", d: 0.1, a: 3 }],
  ],
});
