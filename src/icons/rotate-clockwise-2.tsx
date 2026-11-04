import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rotate-clockwise-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RotateClockwise2 = createIcon("RotateClockwise2", "rotate-clockwise-2", {
  nodes: [
    ["path", { d: "M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" }, { r: "draw" }],
    ["path", { d: "M5.63 7.16l0 .01" }, { r: "pop", d: 0.3, o: [5.63, 7.16] }],
    ["path", { d: "M4.06 11l0 .01" }, { r: "pop", d: 0.36, o: [4.06, 11.0] }],
    ["path", { d: "M4.63 15.1l0 .01" }, { r: "pop", d: 0.42, o: [4.63, 15.1] }],
    ["path", { d: "M7.16 18.37l0 .01" }, { r: "pop", d: 0.48, o: [7.16, 18.37] }],
    ["path", { d: "M11 19.94l0 .01" }, { r: "pop", d: 0.54, o: [11.0, 19.94] }],
  ],
});
