import { icon } from "../icon.js";

// Adapted from Tabler Icons "home-eco" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseEco = icon("HouseEco", "house-eco", {
  nodes: [
    ["path", { d: "M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" }],
    ["path", { d: "M16 22s0 -2 3 -4" }, { r: "sway", d: 0.1, a: 8, o: [16, 22] }],
    ["path", { d: "M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3" }, { r: "sway", d: 0.1, a: 8, o: [16, 22] }],
  ],
});
