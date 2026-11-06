import { icon } from "../icon.js";

// Drawn after Phosphor Icons "cell-signal-x" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CellSignalX = icon("CellSignalX", "cell-signal-x", {
  nodes: [
    ["path", { d: "M3 20h.01" }, { r: "pop", o: [3.005, 20] }],
    ["path", { d: "M7 20v-3" }, { r: "grow", d: 0.06, o: [7, 20] }],
    ["path", { d: "M11 20v-7" }, { r: "grow", d: 0.12, o: [11, 20] }],
    ["path", { d: "M18 10V3" }, { r: "grow", d: 0.18, o: [18, 10] }],
    ["path", { d: "m15 14 6 6" }, { r: "shake", d: 0.25, a: 10, o: [18, 17] }],
    ["path", { d: "m21 14-6 6" }, { r: "shake", d: 0.25, a: 10, o: [18, 17] }],
  ],
});
