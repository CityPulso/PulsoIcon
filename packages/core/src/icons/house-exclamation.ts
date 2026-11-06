import { icon } from "../icon.js";

// Adapted from Tabler Icons "home-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseExclamation = icon("HouseExclamation", "house-exclamation", {
  nodes: [
    ["path", { d: "M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
