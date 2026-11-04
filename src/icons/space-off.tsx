import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "space-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SpaceOff = createIcon("SpaceOff", "space-off", {
  nodes: [
    ["path", { d: "M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3" }, { r: "press", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
