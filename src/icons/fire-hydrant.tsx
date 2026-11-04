import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fire-hydrant" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FireHydrant = createIcon("FireHydrant", "fire-hydrant", {
  nodes: [
    ["path", { d: "M5 21h14" }],
    ["path", { d: "M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" }],
    ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "turn", a: 90, o: [12, 14] }],
    ["path", { d: "M6 8h12" }, { r: "press", d: 0.1, a: 0.06, o: [12, 8] }],
  ],
});
