import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "milkshake" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Milkshake = createIcon("Milkshake", "milkshake", {
  nodes: [
    ["path", { d: "M17 10a5 5 0 0 0 -10 0" }, { r: "pop", o: [12, 9] }],
    ["path", { d: "M6 11a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1l0 -1" }],
    ["path", { d: "M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" }],
    ["path", { d: "M12 5v-2" }, { r: "tilt", d: 0.1, a: 10, o: [12, 5] }],
  ],
});
