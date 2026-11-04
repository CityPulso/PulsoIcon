import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "no-derivatives" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NoDerivatives = createIcon("NoDerivatives", "no-derivatives", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 10h6" }, { r: "growX", o: [12, 10] }],
    ["path", { d: "M9 14h6" }, { r: "growX", d: 0.1, o: [12, 14] }],
  ],
});
