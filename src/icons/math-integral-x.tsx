import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "math-integral-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathIntegralX = createIcon("MathIntegralX", "math-integral-x", {
  nodes: [
    ["path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" }, { r: "draw" }],
    ["path", { d: "M14 12l6 6" }, { r: "pop", d: 0.35, o: [17, 15] }],
    ["path", { d: "M14 18l6 -6" }, { r: "pop", d: 0.35, o: [17, 15] }],
  ],
});
