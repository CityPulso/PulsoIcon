import { icon } from "../icon.js";

// Adapted from Tabler Icons "ruler-measure" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RulerMeasure = icon("RulerMeasure", "ruler-measure", {
  nodes: [
    ["path", { d: "M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75" }],
    ["path", { d: "M9 12v2" }, { r: "grow", d: 0.05, o: [9, 12] }],
    ["path", { d: "M6 12v3" }, { r: "grow", o: [6, 12] }],
    ["path", { d: "M12 12v3" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M18 12v3" }, { r: "grow", d: 0.2, o: [18, 12] }],
    ["path", { d: "M15 12v2" }, { r: "grow", d: 0.15000000000000002, o: [15, 12] }],
    ["path", { d: "M3 3v4" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M3 5h18" }, { r: "draw" }],
    ["path", { d: "M21 3v4" }, { r: "slide", x: 1, y: 0, a: 1 }],
  ],
});
