import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bed-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BedOff = createIcon("BedOff", "bed-off", {
  nodes: [
    ["path", { d: "M7 7a2 2 0 1 0 2 2" }, { r: "bounce", y: -1, a: 1, o: [8, 9] }],
    ["path", { d: "M22 17v-3h-4m-4 0h-12" }, { r: "pulse", a: 0.03, o: [12, 15] }],
    ["path", { d: "M2 8v9" }],
    ["path", { d: "M12 12v2h2m4 0h4v-2a3 3 0 0 0 -3 -3h-6" }, { r: "pulse", a: 0.03, o: [12, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
