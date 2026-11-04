import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-autofit-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitDown = createIcon("ArrowAutofitDown", "arrow-autofit-down", {
  nodes: [
    ["path", { d: "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" }, { r: "press", a: 0.05, o: [8, 12] }],
    ["path", { d: "M18 4v17" }, { r: "bounce", d: 0.1, y: 1, a: 1.5, o: [18, 12.5] }],
    ["path", { d: "M15 18l3 3l3 -3" }, { r: "bounce", d: 0.1, y: 1, a: 1.5, o: [18, 19.5] }],
  ],
});
