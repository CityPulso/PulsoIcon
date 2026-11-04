import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brackets-contain" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsContain = createIcon("BracketsContain", "brackets-contain", {
  nodes: [
    ["path", { d: "M7 4h-4v16h4" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M17 4h4v16h-4" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.1, o: [8, 16] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.2, o: [12, 16] }],
    ["path", { d: "M16 16h.01" }, { r: "pop", d: 0.3, o: [16, 16] }],
  ],
});
