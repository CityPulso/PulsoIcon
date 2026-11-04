import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "row-insert-bottom" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RowInsertBottom = createIcon("RowInsertBottom", "row-insert-bottom", {
  nodes: [
    ["path", { d: "M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" }, { r: "slide", x: 0, y: -1, a: 1 }],
    ["path", { d: "M12 15l0 4" }, { r: "pop", d: 0.1, o: [12, 17] }],
    ["path", { d: "M14 17l-4 0" }, { r: "pop", d: 0.1, o: [12, 17] }],
  ],
});
