import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "zzz-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ZzzOff = createIcon("ZzzOff", "zzz-off", {
  text: true,
  nodes: [
    ["path", { d: "M4 12h6l-6 8h6" }, { r: "float", y: -1, a: 1.5, o: [7, 16] }],
    ["path", { d: "M14 4h6l-5.146 6.862m1.146 1.138h4" }, { r: "float", d: 0.15, y: -1, a: 1.5, o: [17, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M4 12h6l-6 8h6", fill: "none" }, { r: "float", y: -1, a: 1.5, o: [7, 16] }],
    ["path", { d: "M14 4h6l-6 8h6", fill: "none" }, { r: "float", d: 0.15, y: -1, a: 1.5, o: [17, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
