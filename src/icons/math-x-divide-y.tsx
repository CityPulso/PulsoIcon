import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-x-divide-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathXDivideY = createIcon("MathXDivideY", "math-x-divide-y", {
  nodes: [
    ["path", { d: "M9 3l6 6" }, { r: "pop", o: [12, 6] }],
    ["path", { d: "M9 9l6 -6" }, { r: "pop", o: [12, 6] }],
    ["path", { d: "M9 15l3 4.5" }, { r: "pop", d: 0.3, o: [12, 18] }],
    ["path", { d: "M15 15l-4.5 7" }, { r: "pop", d: 0.3, o: [12, 18] }],
    ["path", { d: "M5 12h14" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
