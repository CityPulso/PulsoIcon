import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sort-0-9" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Sort09 = createIcon("Sort09", "sort-0-9", {
  nodes: [
    ["path", { d: "M11 12h2" }, { r: "growX", d: 0.05, o: [12, 12] }],
    ["path", { d: "M4 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" }, { r: "bounce", y: -1, a: 1.5 }],
    ["path", { d: "M16 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, { r: "bounce", d: 0.12, y: -1, a: 1.5 }],
  ],
});
