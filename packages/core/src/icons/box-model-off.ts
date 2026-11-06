import { icon } from "../icon.js";

// Adapted from Tabler Icons "box-model-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxModelOff = icon("BoxModelOff", "box-model-off", {
  nodes: [
    ["path", { d: "M12 8h4v4m0 4h-8v-8" }, { r: "pulse", a: 0.12, o: [12, 12] }],
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" }],
    ["path", { d: "M16 16l3.3 3.3" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M16 8l3.3 -3.3" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M8 8l-3.3 -3.3" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M8 16l-3.3 3.3" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M8 8h8v8h-8l0 -8" }, { r: "pulse", a: 0.12, o: [12, 12] }, "cut"],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M16 16l3.3 3.3" }, { r: "draw", d: 0.08, o: [12, 12] }, "line"],
    ["path", { d: "M16 8l3.3 -3.3" }, { r: "draw", d: 0.08, o: [12, 12] }, "line"],
    ["path", { d: "M8 8l-3.3 -3.3" }, { r: "draw", d: 0.08, o: [12, 12] }, "line"],
    ["path", { d: "M8 16l-3.3 3.3" }, { r: "draw", d: 0.08, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
