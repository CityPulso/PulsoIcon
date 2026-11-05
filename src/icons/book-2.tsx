import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "book-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Book2 = createIcon("Book2", "book-2", {
  nodes: [
    ["path", { d: "M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12" }, { r: "open", o: [6, 12] }],
    ["path", { d: "M19 16h-12a2 2 0 0 0 -2 2" }, { r: "open", o: [6, 12] }],
    ["path", { d: "M9 8h6" }, { r: "growX", d: 0.2, o: [9, 8] }],
  ],
});
