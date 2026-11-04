import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-up-left-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpLeftCircle = createIcon("ArrowUpLeftCircle", "arrow-up-left-circle", {
  nodes: [
    ["path", { d: "M15.536 15.536l-9.536 -9.536" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1.5, o: [11, 11] }],
    ["path", { d: "M10 6h-4v4" }, { r: "slide", d: 0.05, x: -1, y: -1, a: 1.5, o: [8, 8] }],
    ["path", { d: "M15.586 15.586a2 2 0 1 0 2.828 2.828a2 2 0 0 0 -2.828 -2.828" }, { r: "pop", o: [17, 17] }],
  ],
});
