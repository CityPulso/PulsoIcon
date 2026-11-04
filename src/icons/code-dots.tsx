import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "code-dots" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CodeDots = createIcon("CodeDots", "code-dots", {
  nodes: [
    ["path", { d: "M15 12h.01" }, { r: "pop", d: 0.2, o: [15, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 12h.01" }, { r: "pop", o: [9, 12] }],
    ["path", { d: "M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" }, { r: "slide", x: 1, a: 1 }],
  ],
});
