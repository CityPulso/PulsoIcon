import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "function-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FunctionOff = createIcon("FunctionOff", "function-off", {
  nodes: [
    [
      "path",
      { d: "M9 15.5v.25c0 .69 .56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374 -1.244l.376 -3.756m.363 -3.63l.013 -.126a1.38 1.38 0 0 1 1.374 -1.244c.69 0 1.25 .56 1.25 1.25v.25" },
      { r: "draw", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M9 12h3" }, { r: "draw", d: 0.3, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
    ["path", { d: "M9 11.2h5.7" }, { r: "draw", d: 0.3, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
