import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneOff = createIcon("SmartphoneOff", "smartphone-off", {
  nodes: [
    ["path", { d: "M7.159 3.185c.256 -.119 .54 -.185 .841 -.185h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M11 4h2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 17v.01" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M12 18h.01" }, { r: "shake", a: 1, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
