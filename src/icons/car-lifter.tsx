import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-lifter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarLifter = createIcon("CarLifter", "car-lifter", {
  nodes: [
    ["path", { d: "M7 21l10 -7l-10 -7" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M17 7l-10 7l10 7" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M20 7h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1" }, { r: "slide", y: -1, a: 2 }],
    ["path", { d: "M3 21h18" }],
  ],
});
