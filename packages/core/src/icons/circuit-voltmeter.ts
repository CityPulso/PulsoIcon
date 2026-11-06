import { icon } from "../icon.js";

// Adapted from Tabler Icons "circuit-voltmeter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitVoltmeter = icon("CircuitVoltmeter", "circuit-voltmeter", {
  nodes: [
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M5 12h-3" }],
    ["path", { d: "M19 12h3" }],
    ["path", { d: "M10 10l2 4l2 -4" }, { r: "draw", d: 0.1 }],
  ],
});
