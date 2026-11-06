import { icon } from "../icon.js";

// Adapted from Tabler Icons "ruler-measure-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RulerMeasure2 = icon("RulerMeasure2", "ruler-measure-2", {
  nodes: [
    ["path", { d: "M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75" }],
    ["path", { d: "M12 9h-2" }, { r: "growX", d: 0.1, o: [12, 9] }],
    ["path", { d: "M12 6h-3" }, { r: "growX", d: 0.05, o: [12, 6] }],
    ["path", { d: "M12 12h-3" }, { r: "growX", d: 0.15, o: [12, 12] }],
    ["path", { d: "M12 18h-3" }, { r: "growX", d: 0.25, o: [12, 18] }],
    ["path", { d: "M12 15h-2" }, { r: "growX", d: 0.2, o: [12, 15] }],
    ["path", { d: "M21 3h-4" }, { r: "pop", d: 0.3, o: [19, 3] }],
    ["path", { d: "M19 3v18" }, { r: "grow", o: [19, 12] }],
    ["path", { d: "M21 21h-4" }, { r: "pop", d: 0.3, o: [19, 21] }],
  ],
});
