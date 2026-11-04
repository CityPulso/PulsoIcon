import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-model-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxModel2Off = createIcon("BoxModel2Off", "box-model-2-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" }],
    ["path", { d: "M12 8h4v4m0 4h-8v-8" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
