import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-pin-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapPinCancel = createIcon("MapPinCancel", "map-pin-cancel", {
  nodes: [
    ["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M12.463 21.431a1.999 1.999 0 0 1 -1.876 -.531l-4.244 -4.243a8 8 0 1 1 13.594 -4.655" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
