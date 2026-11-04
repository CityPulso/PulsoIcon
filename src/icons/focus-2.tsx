import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "focus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Focus2 = createIcon("Focus2", "focus-2", {
  nodes: [
    ["path", { d: "M12 12h.01" }, { r: "pop", a: 0.5, o: [12, 12] }],
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "pulse", d: 0.1, a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 3l0 2" }, { r: "slide", d: 0.15, y: 1, a: 1 }],
    ["path", { d: "M3 12l2 0" }, { r: "slide", d: 0.15, x: 1, a: 1 }],
    ["path", { d: "M12 19l0 2" }, { r: "slide", d: 0.15, y: -1, a: 1 }],
    ["path", { d: "M19 12l2 0" }, { r: "slide", d: 0.15, x: -1, a: 1 }],
  ],
});
