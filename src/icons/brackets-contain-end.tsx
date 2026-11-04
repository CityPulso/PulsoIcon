import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brackets-contain-end" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsContainEnd = createIcon("BracketsContainEnd", "brackets-contain-end", {
  nodes: [
    ["path", { d: "M14 4h4v16h-4" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M5 16h.01" }, { r: "pop", d: 0.1, o: [5, 16] }],
    ["path", { d: "M9 16h.01" }, { r: "pop", d: 0.2, o: [9, 16] }],
    ["path", { d: "M13 16h.01" }, { r: "pop", d: 0.3, o: [13, 16] }],
  ],
});
