import { icon } from "../icon.js";

// Adapted from Tabler Icons "home-move" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseMove = icon("HouseMove", "house-move", {
  nodes: [
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" }],
    ["path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" }],
    ["path", { d: "M16 19h6" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
    ["path", { d: "M19 16l3 3l-3 3" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 2 }],
  ],
});
