import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "explicit-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExplicitOff = createIcon("ExplicitOff", "explicit-off", {
  nodes: [
    ["path", { d: "M14 8h-2m-2 2v6h4" }, { r: "draw" }],
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" }],
    ["path", { d: "M12 12h-2" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14" }],
    ["path", { d: "M14 8h-4v8h4" }, { r: "draw" }, "line"],
    ["path", { d: "M14 12h-4" }, { r: "draw" }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
