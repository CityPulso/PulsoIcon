import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-pushbutton" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitPushbutton = createIcon("CircuitPushbutton", "circuit-pushbutton", {
  nodes: [
    ["path", { d: "M2 17h2" }],
    ["path", { d: "M20 17h2" }],
    ["path", { d: "M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M6 11h12" }, { r: "slide", y: 1, a: 3.5 }],
    ["path", { d: "M12 11v-6" }, { r: "slide", y: 1, a: 3.5 }],
  ],
});
