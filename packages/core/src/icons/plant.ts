import { icon } from "../icon.js";

// Adapted from Tabler Icons "plant" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Plant = icon("Plant", "plant", {
  nodes: [
    ["path", { d: "M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4" }, { r: "press", d: 0, a: 0.08, o: [12, 18] }],
    ["path", { d: "M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" }, { r: "sway", d: 0.05, a: 8, o: [12, 11] }],
    ["path", { d: "M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" }, { r: "sway", d: 0.1, a: 8, o: [12, 11] }],
    ["path", { d: "M12 15l0 -6" }, { r: "grow", d: 0, o: [12, 15] }],
  ],
});
