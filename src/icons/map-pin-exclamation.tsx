import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-pin-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapPinExclamation = createIcon("MapPinExclamation", "map-pin-exclamation", {
  nodes: [
    ["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M15.005 19.31l-1.591 1.59a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.592 -4.638" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
