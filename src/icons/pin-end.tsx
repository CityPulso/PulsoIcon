import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pin-end" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PinEnd = createIcon("PinEnd", "pin-end", {
  nodes: [
    ["path", { d: "M21 11v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" }],
    ["path", { d: "M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [19, 17] }],
    ["path", { d: "M10 13v-4h4" }, { r: "slide", d: 0.1, x: -0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M14 13l-4 -4" }, { r: "slide", d: 0.1, x: -0.7, y: -0.7, a: 1.5 }],
  ],
});
