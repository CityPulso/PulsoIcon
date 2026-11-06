import { icon } from "../icon.js";

// Adapted from Tabler Icons "target-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Target2 = icon("Target2", "target-2", {
  nodes: [
    ["path", { d: "M17 21l-1.74 -6" }],
    ["path", { d: "M7 21l1.74 -6" }],
    ["path", { d: "M12 4v-1" }],
    ["path", { d: "M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.12, o: [12, 10] }],
    ["path", { d: "M18 10a6 6 0 1 0 -12 0a6 6 0 0 0 12 0" }, { r: "press", a: 0.06, o: [12, 10] }],
  ],
});
