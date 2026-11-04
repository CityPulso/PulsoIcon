import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-fan-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarFan3 = createIcon("CarFan3", "car-fan-3", {
  nodes: [
    ["path", { d: "M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925l-5.34 4.161" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M14.044 14.624l-2.044 -2.624h4" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428l4.161 5.34" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925l5.34 -4.161" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M18 15.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" }, { r: "draw", d: 0.2 }],
  ],
});
