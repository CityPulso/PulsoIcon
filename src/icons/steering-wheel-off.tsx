import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "steering-wheel-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SteeringWheelOff = createIcon("SteeringWheelOff", "steering-wheel-off", {
  nodes: [
    ["path", { d: "M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M10.595 10.576a2 2 0 1 0 2.827 2.83" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M12 14v7" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M10 12l-6.75 -2" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M15.542 11.543l5.208 -1.543" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
