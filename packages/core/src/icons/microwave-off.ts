import { icon } from "../icon.js";

// Adapted from Tabler Icons "microwave-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MicrowaveOff = icon("MicrowaveOff", "microwave-off", {
  nodes: [
    ["path", { d: "M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10" }],
    ["path", { d: "M15 6v5m0 4v3" }],
    ["path", { d: "M18 12h.01" }, { r: "flicker", o: [18, 12] }],
    ["path", { d: "M18 9h.01" }, { r: "flicker", d: 0.1, o: [18, 9] }],
    ["path", { d: "M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.636 .265 1.272 .665 1.907 .428" }, { r: "float", d: 0.1, o: [9, 11] }],
    ["path", { d: "M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" }, { r: "float", d: 0.2, o: [9, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
