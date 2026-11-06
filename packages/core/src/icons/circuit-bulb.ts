import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-bulb" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitBulb = icon("CircuitBulb", "circuit-bulb", {
  nodes: [
    ["path", { d: "M2 12h5" }],
    ["path", { d: "M17 12h5" }],
    ["path", { d: "M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "flicker" }],
    ["path", { d: "M8.5 8.5l7 7" }, { r: "flicker" }],
    ["path", { d: "M15.5 8.5l-7 7" }, { r: "flicker" }],
  ],
});
