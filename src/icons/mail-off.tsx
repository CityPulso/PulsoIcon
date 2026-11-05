import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mail-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MailOff = createIcon("MailOff", "mail-off", {
  nodes: [
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" }],
    ["path", { d: "M3 7l9 6l.565 -.377m2.435 -1.623l6 -4" }, { r: "draw", o: [12, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }, { r: "draw", o: [12, 10] }, "line"],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
