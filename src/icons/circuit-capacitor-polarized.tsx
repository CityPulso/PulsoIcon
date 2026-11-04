import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-capacitor-polarized" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitCapacitorPolarized = createIcon("CircuitCapacitorPolarized", "circuit-capacitor-polarized", {
  nodes: [
    ["path", { d: "M22 12h-8" }],
    ["path", { d: "M2 12h8" }],
    ["path", { d: "M10 7v10" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M14 7v10" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M17 5h4" }, { r: "pop", d: 0.2, o: [19, 5] }],
    ["path", { d: "M19 3v4" }, { r: "pop", d: 0.2, o: [19, 5] }],
  ],
});
