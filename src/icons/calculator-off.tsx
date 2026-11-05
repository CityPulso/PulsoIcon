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
  solid: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }, undefined, "line"],
    ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }, { r: "press", d: 0.24, o: [16, 17] }, "line"],
    ["path", { d: "M16 10h.01" }, { r: "press", d: 0.06, o: [12, 14] }, "line"],
    ["path", { d: "M12 10h.01" }, { r: "press", d: 0.06, o: [12, 14] }, "line"],
    ["path", { d: "M8 10h.01" }, { r: "press", o: [8, 14] }, "line"],
    ["path", { d: "M12 14h.01" }, { r: "press", d: 0.06, o: [12, 14] }, "line"],
    ["path", { d: "M8 14h.01" }, { r: "press", o: [8, 14] }, "line"],
    ["path", { d: "M12 18h.01" }, { r: "press", d: 0.18, o: [12, 17] }, "line"],
    ["path", { d: "M8 18h.01" }, { r: "press", d: 0.12, o: [8, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
