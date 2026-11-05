import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "elevator-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ElevatorOff = createIcon("ElevatorOff", "elevator-off", {
  nodes: [
    ["path", { d: "M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14" }],
    ["path", { d: "M12 8l2 2" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M10 14l2 2l2 -2" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "m8 10 4-4 4 4" }, { r: "slide", y: -1, a: 1.5 }, "line"],
    ["path", { d: "m8 14 4 4 4-4" }, { r: "slide", y: 1, a: 1.5 }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
