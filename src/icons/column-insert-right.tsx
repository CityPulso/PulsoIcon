import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "column-insert-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ColumnInsertRight = createIcon("ColumnInsertRight", "column-insert-right", {
  nodes: [
    ["path", { d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M15 12l4 0" }, { r: "pop", d: 0.1, o: [17, 12] }],
    ["path", { d: "M17 10l0 4" }, { r: "pop", d: 0.1, o: [17, 12] }],
  ],
});
