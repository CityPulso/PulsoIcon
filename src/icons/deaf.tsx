import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "deaf" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Deaf = createIcon("Deaf", "deaf", {
  nodes: [
    ["path", { d: "M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M10 10a3 3 0 1 1 5 2.2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M5 13l4 4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9 13l-4 4" }, { r: "draw", d: 0.3 }],
  ],
});
