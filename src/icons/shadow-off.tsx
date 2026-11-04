import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shadow-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShadowOff = createIcon("ShadowOff", "shadow-off", {
  nodes: [
    ["path", { d: "M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" }],
    ["path", { d: "M16 12h2" }, { r: "growX", o: [16, 12] }],
    ["path", { d: "M13 15h2" }, { r: "growX", d: 0.05, o: [13, 15] }],
    ["path", { d: "M13 18h1" }, { r: "growX", d: 0.1, o: [13, 18] }],
    ["path", { d: "M13 9h4" }, { r: "growX", d: 0.15, o: [13, 9] }],
    ["path", { d: "M13 6h1" }, { r: "growX", d: 0.2, o: [13, 6] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
