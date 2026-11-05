import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "a-b" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AB = createIcon("AB", "a-b", {
  text: true,
  nodes: [
    ["path", { d: "M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" }, { r: "draw" }],
    ["path", { d: "M12 6l0 12" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" }, { r: "draw", d: 0.3 }],
  ],
});
