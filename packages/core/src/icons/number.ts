import { icon } from "../icon.js";

// Adapted from Tabler Icons "number" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number = icon("Number", "number", {
  text: true,
  nodes: [
    ["path", { d: "M4 17v-10l7 10v-10" }, { r: "draw" }],
    ["path", { d: "M15 17h5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M15 10a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" }, { r: "draw", d: 0.12 }],
  ],
});
