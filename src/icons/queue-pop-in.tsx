import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "queue-pop-in" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const QueuePopIn = createIcon("QueuePopIn", "queue-pop-in", {
  nodes: [
    ["path", { d: "M8 6h-3a2 2 0 0 0 -2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2 -2v-3.357" }],
    ["path", { d: "M13 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4" }, { r: "pop", d: 0, a: 0.15, o: [17, 7] }],
    ["path", { d: "M13.5 10.5l-5.5 5.5" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1.5, o: [10.5, 13.5] }],
    ["path", { d: "M8 11v5h5" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1.5, o: [10.5, 13.5] }],
  ],
});
