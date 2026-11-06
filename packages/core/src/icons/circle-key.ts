import { icon } from "../icon.js";

// Adapted from Tabler Icons "circle-key" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleKey = icon("CircleKey", "circle-key", {
  nodes: [
    ["path", { d: "M12 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "turn", d: 0.1, a: 45, o: [14, 10] }],
    ["path", { d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M12.5 11.5l-4 4l1.5 1.5" }, { r: "turn", d: 0.1, a: 45, o: [14, 10] }],
    ["path", { d: "M12 15l-1.5 -1.5" }, { r: "turn", d: 0.1, a: 45, o: [14, 10] }],
  ],
});
