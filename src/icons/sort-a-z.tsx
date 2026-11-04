import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sort-a-z" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SortAZ = createIcon("SortAZ", "sort-a-z", {
  nodes: [
    ["path", { d: "M16 8h4l-4 8h4" }, { r: "pop", d: 0.3, o: [18, 12] }],
    ["path", { d: "M4 16v-6a2 2 0 1 1 4 0v6" }, { r: "pop", o: [6, 13] }],
    ["path", { d: "M4 13h4" }, { r: "pop", o: [6, 13] }],
    ["path", { d: "M11 12h2" }, { r: "growX", d: 0.15, o: [11, 12] }],
  ],
});
