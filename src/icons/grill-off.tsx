import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "grill-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GrillOff = createIcon("GrillOff", "grill-off", {
  nodes: [
    ["path", { d: "M8 8h-3a6 6 0 0 0 6 6h2c.315 0 .624 -.024 .926 -.071m2.786 -1.214a5.99 5.99 0 0 0 2.284 -4.49l0 -.225h-7" }],
    ["path", { d: "M18.827 18.815a2 2 0 1 1 -2.663 -2.633" }, { r: "roll", x: 1, a: 0.5, o: [17, 17] }],
    ["path", { d: "M9 14l-3 6" }],
    ["path", { d: "M15 18h-8" }],
    ["path", { d: "M15 5v-1" }, { r: "float", d: 0.1, o: [15, 4] }],
    ["path", { d: "M12 5v-1" }, { r: "float", d: 0.2, o: [12, 4] }],
    ["path", { d: "M9 5v-1" }, { r: "float", d: 0.3, o: [9, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
