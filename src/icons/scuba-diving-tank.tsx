import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "scuba-diving-tank" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScubaDivingTank = createIcon("ScubaDivingTank", "scuba-diving-tank", {
  nodes: [
    ["path", { d: "M8 11a4 4 0 1 1 8 0v5h-8l0 -5" }, { r: "press", a: 0.04, o: [12, 15] }],
    ["path", { d: "M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3" }, { r: "press", a: 0.04, o: [12, 15] }],
    ["path", { d: "M9 4h6" }],
    ["path", { d: "M12 7v-3" }],
    ["path", { d: "M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "spin", a: 180, o: [8, 4] }],
    ["path", { d: "M12 4h.01" }],
  ],
});
