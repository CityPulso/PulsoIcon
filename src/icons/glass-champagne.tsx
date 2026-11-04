import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "glass-champagne" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlassChampagne = createIcon("GlassChampagne", "glass-champagne", {
  nodes: [
    ["path", { d: "M9 21h6" }],
    ["path", { d: "M12 16v5" }],
    ["path", { d: "M8 5a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" }, { r: "sway", a: 4, o: [12, 16] }],
    ["path", { d: "M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" }, { r: "sway", a: 4, o: [12, 16] }],
  ],
});
