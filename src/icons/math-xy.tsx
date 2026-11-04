import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-xy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathXy = createIcon("MathXy", "math-xy", {
  nodes: [
    ["path", { d: "M14 9l3 5.063" }, { r: "pop", d: 0.2, o: [17, 13.5] }],
    ["path", { d: "M4 9l6 6" }, { r: "pop", o: [7, 12] }],
    ["path", { d: "M4 15l6 -6" }, { r: "pop", o: [7, 12] }],
    ["path", { d: "M20 9l-4.8 9" }, { r: "pop", d: 0.2, o: [17, 13.5] }],
  ],
});
