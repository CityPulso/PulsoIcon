import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sort-z-a" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SortZA = createIcon("SortZA", "sort-z-a", {
  text: true,
  nodes: [
    ["path", { d: "M4 8h4l-4 8h4" }, { r: "pop", o: [6, 12] }],
    ["path", { d: "M16 16v-6a2 2 0 1 1 4 0v6" }, { r: "pop", d: 0.3, o: [18, 13] }],
    ["path", { d: "M16 13h4" }, { r: "pop", d: 0.3, o: [18, 13] }],
    ["path", { d: "M11 12h2" }, { r: "growX", d: 0.15, o: [11, 12] }],
  ],
});
