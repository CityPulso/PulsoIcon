import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarOff = createIcon("CarOff", "car-off", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [7, 17] }],
    ["path", { d: "M15.584 15.588a2 2 0 0 0 2.828 2.83" }, { r: "spin", d: 0, o: [17, 17] }],
    ["path", { d: "M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
