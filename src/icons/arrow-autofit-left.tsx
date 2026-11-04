import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-autofit-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitLeft = createIcon("ArrowAutofitLeft", "arrow-autofit-left", {
  nodes: [
    ["path", { d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" }, { r: "press", a: 0.05, o: [12, 8] }],
    ["path", { d: "M20 18h-17" }, { r: "bounce", d: 0.1, x: -1, a: 1.5, o: [11.5, 18] }],
    ["path", { d: "M6 15l-3 3l3 3" }, { r: "bounce", d: 0.1, x: -1, a: 1.5, o: [4.5, 18] }],
  ],
});
