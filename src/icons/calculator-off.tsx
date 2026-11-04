import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "calculator-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CalculatorOff = createIcon("CalculatorOff", "calculator-off", {
  nodes: [
    ["path", { d: "M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11" }],
    ["path", { d: "M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" }],
    ["path", { d: "M8 14v.01" }, { r: "press", o: [8, 14] }],
    ["path", { d: "M12 14v.01" }, { r: "press", d: 0.06, o: [12, 14] }],
    ["path", { d: "M8 17v.01" }, { r: "press", d: 0.12, o: [8, 17] }],
    ["path", { d: "M12 17v.01" }, { r: "press", d: 0.18, o: [12, 17] }],
    ["path", { d: "M16 17v.01" }, { r: "press", d: 0.24, o: [16, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
