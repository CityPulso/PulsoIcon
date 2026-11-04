import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "category" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Category = createIcon("Category", "category", {
  nodes: [
    ["path", { d: "M4 4h6v6h-6l0 -6" }, { r: "pop", d: 0, o: [7, 7] }],
    ["path", { d: "M14 4h6v6h-6l0 -6" }, { r: "pop", d: 0.08, o: [17, 7] }],
    ["path", { d: "M4 14h6v6h-6l0 -6" }, { r: "pop", d: 0.16, o: [7, 17] }],
    ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.24, o: [17, 17] }],
  ],
});
