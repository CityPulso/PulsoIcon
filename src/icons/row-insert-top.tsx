import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "row-insert-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RowInsertTop = createIcon("RowInsertTop", "row-insert-top", {
  nodes: [
    ["path", { d: "M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1" }, { r: "slide", x: 0, y: 1, a: 1 }],
    ["path", { d: "M12 9v-4" }, { r: "pop", d: 0.1, o: [12, 7] }],
    ["path", { d: "M10 7l4 0" }, { r: "pop", d: 0.1, o: [12, 7] }],
  ],
});
