import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "prong" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Prong = createIcon("Prong", "prong", {
  nodes: [
    ["path", { d: "M10.2 10.2l6.3 6.3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772" }, { r: "slide", x: 1, y: 1, a: 1.5 }],
    ["path", { d: "M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" }, { r: "tilt", a: 8, o: [7, 7] }],
  ],
});
