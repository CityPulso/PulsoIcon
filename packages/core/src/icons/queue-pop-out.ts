import { icon } from "../icon.js";

// Adapted from Tabler Icons "queue-pop-out" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const QueuePopOut = icon("QueuePopOut", "queue-pop-out", {
  nodes: [
    ["path", { d: "M11 5h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6" }],
    ["path", { d: "M3 13h6a2 2 0 0 1 2 2v6" }, { r: "press", d: 0, o: [7, 17] }],
    ["path", { d: "M16 3h5v5" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M21 3l-6 6" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18, 6] }],
  ],
});
