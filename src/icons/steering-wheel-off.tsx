import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "steering-wheel-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "steering-wheel" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SteeringWheelOff = createIcon("SteeringWheelOff", "steering-wheel-off", {
  nodes: [
    ["path", { d: "M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M10.595 10.576a2 2 0 1 0 2.827 2.83" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M12 14v7" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M10 12l-6.75 -2" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M15.542 11.543l5.208 -1.543" }, { r: "turn", d: 0, a: 45, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-13 8.66a8 8 0 0 0 7 7.937v-5.107a3 3 0 0 1 -1.898 -2.05l-5.07 -1.504q -.031 .36 -.032 .725m15.967 -.725l-5.069 1.503a3 3 0 0 1 -1.897 2.051v5.108a8 8 0 0 0 6.985 -8.422zm-11.967 -6.204a8 8 0 0 0 -3.536 4.244l4.812 1.426a3 3 0 0 1 5.448 0l4.812 -1.426a8 8 0 0 0 -11.536 -4.244",
        stroke: "none",
      },
      { r: "turn", d: 0, a: 45, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
