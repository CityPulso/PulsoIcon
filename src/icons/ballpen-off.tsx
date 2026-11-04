import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ballpen-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BallpenOff = createIcon("BallpenOff", "ballpen-off", {
  nodes: [
    ["path", { d: "M14 6l7 7l-2 2" }, { r: "tilt", d: 0, a: 8, o: [5, 19] }],
    ["path", { d: "M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" }, { r: "tilt", d: 0, a: 8, o: [5, 19] }],
    ["path", { d: "M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" }, { r: "tilt", d: 0, a: 8, o: [5, 19] }],
    ["path", { d: "M4 20l1.768 -1.768" }, { r: "tilt", d: 0, a: 8, o: [5, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
