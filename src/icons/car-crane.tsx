import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-crane" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarCrane = createIcon("CarCrane", "car-crane", {
  nodes: [
    ["path", { d: "M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [5, 17] }],
    ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [17, 17] }],
    ["path", { d: "M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" }],
    ["path", { d: "M12 18v-11h3" }],
    ["path", { d: "M3 17v-5h9" }],
    ["path", { d: "M4 12v-6l18 -3v2" }, { r: "turn", a: -8, o: [4, 12] }],
    ["path", { d: "M8 12v-4l-4 -2" }, { r: "turn", a: -8, o: [4, 12] }],
  ],
});
