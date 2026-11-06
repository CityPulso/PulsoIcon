import { icon } from "../icon.js";

// Adapted from Tabler Icons "bold-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoldOff = icon("BoldOff", "bold-off", {
  text: true,
  nodes: [
    ["path", { d: "M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" }, { r: "pop", d: 0, o: [12, 12] }],
    ["path", { d: "M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" }, { r: "pop", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M6 12h9a4 4 0 010 8H7a1 1 0 01-1-1V5a1 1 0 011-1h7a4 4 0 010 8", fill: "none" }, { r: "pop", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
