import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "road-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RoadOff = createIcon("RoadOff", "road-off", {
  nodes: [
    ["path", { d: "M4 19l3.332 -11.661" }],
    ["path", { d: "M16 5l2.806 9.823" }],
    ["path", { d: "M12 8v-2" }, { r: "slide", y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M12 13v-1" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 12.5] }],
    ["path", { d: "M12 18v-2" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
