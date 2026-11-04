import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-symbols" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathSymbols = createIcon("MathSymbols", "math-symbols", {
  nodes: [
    ["path", { d: "M3 12l18 0" }],
    ["path", { d: "M12 3l0 18" }],
    ["path", { d: "M16.5 4.5l3 3" }, { r: "spin", a: 90, o: [18, 6] }],
    ["path", { d: "M19.5 4.5l-3 3" }, { r: "spin", a: 90, o: [18, 6] }],
    ["path", { d: "M6 4l0 4" }, { r: "spin", d: 0.1, a: 90, o: [6, 6] }],
    ["path", { d: "M4 6l4 0" }, { r: "spin", d: 0.1, a: 90, o: [6, 6] }],
    ["path", { d: "M18 16l.01 0" }, { r: "pop", d: 0.3, o: [18, 18] }],
    ["path", { d: "M18 20l.01 0" }, { r: "pop", d: 0.3, o: [18, 18] }],
    ["path", { d: "M4 18l4 0" }, { r: "growX", d: 0.2, o: [6, 18] }],
  ],
});
