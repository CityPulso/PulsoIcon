import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-x-minus-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathXMinusY = createIcon("MathXMinusY", "math-x-minus-y", {
  nodes: [
    ["path", { d: "M2 9l6 6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M2 15l6 -6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M16 9l3 5.063" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M22 9l-4.8 9" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M10 12h4" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
