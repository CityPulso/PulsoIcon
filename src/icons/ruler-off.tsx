import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ruler-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RulerOff = createIcon("RulerOff", "ruler-off", {
  nodes: [
    ["path", { d: "M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" }],
    ["path", { d: "M4 8h2" }, { r: "growX", o: [4, 8] }],
    ["path", { d: "M4 12h3" }, { r: "growX", d: 0.06, o: [4, 12] }],
    ["path", { d: "M4 16h2" }, { r: "growX", d: 0.12, o: [4, 16] }],
    ["path", { d: "M12 4v3" }, { r: "grow", d: 0.06, o: [12, 4] }],
    ["path", { d: "M16 4v2" }, { r: "grow", d: 0.12, o: [16, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
