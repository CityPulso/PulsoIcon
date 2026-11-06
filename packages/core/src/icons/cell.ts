import { icon } from "../icon.js";

// Adapted from Tabler Icons "cell" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cell = icon("Cell", "cell", {
  nodes: [
    ["path", { d: "M8 4l-4 2v5l4 2l4 -2v-5l-4 -2" }, { r: "pop", a: 0.15, o: [8, 8.5] }],
    ["path", { d: "M12 11l4 2l4 -2v-5l-4 -2l-4 2" }, { r: "pop", d: 0.1, a: 0.15, o: [16, 8.5] }],
    ["path", { d: "M8 13v5l4 2l4 -2v-5" }, { r: "pop", d: 0.2, a: 0.15, o: [12, 16.5] }],
  ],
});
