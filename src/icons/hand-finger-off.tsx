import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hand-finger-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HandFingerOff = createIcon("HandFingerOff", "hand-finger-off", {
  nodes: [
    ["path", { d: "M8 13v-5" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M8.06 4.077a1.5 1.5 0 0 1 2.94 .423v2.5m0 4v1" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M12.063 8.065a1.5 1.5 0 0 1 1.937 1.435v.5" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M14.06 10.082a1.5 1.5 0 0 1 2.94 .418v1.5" }, { r: "press", a: 0.1, o: [13, 18] }],
    [
      "path",
      {
        d: "M17 11.5a1.5 1.5 0 0 1 3 0v4.5m-.88 3.129a6 6 0 0 1 -5.12 2.871h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47",
      },
      { r: "press", a: 0.1, o: [13, 18] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M22 14a8 8 0 0 1-8 8", fill: "none" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2", fill: "none" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1", fill: "none" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10", fill: "none" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15", fill: "none" }, { r: "press", a: 0.1, o: [13, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
