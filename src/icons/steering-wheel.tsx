import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "steering-wheel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SteeringWheel = createIcon("SteeringWheel", "steering-wheel", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M12 14l0 7" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M10 12l-6.75 -2" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M14 12l6.75 -2" }, { r: "turn", a: 45, o: [12, 12] }],
  ],
});
