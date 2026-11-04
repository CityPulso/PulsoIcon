import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapCancel = createIcon("MapCancel", "map-cancel", {
  nodes: [
    ["path", { d: "M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8" }],
    ["path", { d: "M9 4v13" }],
    ["path", { d: "M15 7v6" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
