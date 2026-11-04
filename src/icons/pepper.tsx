import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pepper" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pepper = createIcon("Pepper", "pepper", {
  nodes: [
    ["path", { d: "M13 11c0 2.21 -2.239 4 -5 4s-5 -1.79 -5 -4a8 8 0 1 0 16 0a3 3 0 0 0 -6 0" }, { r: "wobble", o: [11, 15] }],
    ["path", { d: "M16 8c0 -2 2 -4 4 -4" }, { r: "sway", d: 0.1, o: [16, 8] }],
  ],
});
