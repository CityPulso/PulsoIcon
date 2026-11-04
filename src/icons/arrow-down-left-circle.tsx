import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-down-left-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowDownLeftCircle = createIcon("ArrowDownLeftCircle", "arrow-down-left-circle", {
  nodes: [
    ["path", { d: "M15.536 8.464l-9.536 9.536" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1.5, o: [11, 13] }],
    ["path", { d: "M6 14v4h4" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1.5, o: [8, 16] }],
    ["path", { d: "M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828" }, { r: "pop", o: [17, 7] }],
  ],
});
