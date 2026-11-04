import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rotate-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Rotate2 = createIcon("Rotate2", "rotate-2", {
  nodes: [
    ["path", { d: "M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" }, { r: "draw" }],
    ["path", { d: "M18.37 7.16l0 .01" }, { r: "pop", d: 0.3, o: [18.37, 7.16] }],
    ["path", { d: "M13 19.94l0 .01" }, { r: "pop", d: 0.54, o: [13.0, 19.94] }],
    ["path", { d: "M16.84 18.37l0 .01" }, { r: "pop", d: 0.48, o: [16.84, 18.37] }],
    ["path", { d: "M19.37 15.1l0 .01" }, { r: "pop", d: 0.42, o: [19.37, 15.1] }],
    ["path", { d: "M19.94 11l0 .01" }, { r: "pop", d: 0.36, o: [19.94, 11.0] }],
  ],
});
