import { icon } from "../icon.js";

// Adapted from Tabler Icons "home-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseDown = icon("HouseDown", "house-down", {
  nodes: [
    ["path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
