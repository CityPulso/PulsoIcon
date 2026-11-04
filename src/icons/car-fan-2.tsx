import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-fan-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarFan2 = createIcon("CarFan2", "car-fan-2", {
  nodes: [
    ["path", { d: "M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925l-5.34 4.161" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M14.044 14.624l-2.044 -2.624h4" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428l4.161 5.34" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925l5.34 -4.161" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" }, { r: "draw", d: 0.2 }],
  ],
});
