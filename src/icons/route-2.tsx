import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "route-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Route2 = createIcon("Route2", "route-2", {
  nodes: [
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", o: [5, 19] }],
    ["path", { d: "M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" }, { r: "pop", d: 0.5, o: [19, 5] }],
    ["path", { d: "M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" }, { r: "draw", d: 0.15 }],
  ],
});
