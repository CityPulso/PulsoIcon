import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hemisphere" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hemisphere = createIcon("Hemisphere", "hemisphere", {
  nodes: [
    ["path", { d: "M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M3 9a9 9 0 0 0 18 0" }, { r: "wobble", d: 0, o: [12, 12] }],
  ],
});
