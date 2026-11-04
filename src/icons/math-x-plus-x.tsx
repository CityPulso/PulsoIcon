import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-x-plus-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathXPlusX = createIcon("MathXPlusX", "math-x-plus-x", {
  nodes: [
    ["path", { d: "M2 9l6 6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M2 15l6 -6" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M16 9l6 6" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M16 15l6 -6" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M10 12h4" }, { r: "spin", d: 0.15, a: 180, o: [12, 12] }],
    ["path", { d: "M12 10v4" }, { r: "spin", d: 0.15, a: 180, o: [12, 12] }],
  ],
});
