import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pin-invoke" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PinInvoke = createIcon("PinInvoke", "pin-invoke", {
  nodes: [
    ["path", { d: "M21 13v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h9" }],
    ["path", { d: "M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [19, 7] }],
    ["path", { d: "M10 11h4v4" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M10 15l4 -4" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 1.5 }],
  ],
});
