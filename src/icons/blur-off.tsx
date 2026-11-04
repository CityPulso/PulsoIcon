import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "blur-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BlurOff = createIcon("BlurOff", "blur-off", {
  nodes: [
    ["path", { d: "M12 3v5m0 4v8" }],
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }],
    ["path", { d: "M16 12h5" }, { r: "fade", o: [16, 12] }],
    ["path", { d: "M13 9h7" }, { r: "fade", o: [16, 12] }],
    ["path", { d: "M12 6h6" }, { r: "fade", o: [16, 12] }],
    ["path", { d: "M12 18h6" }, { r: "fade", o: [16, 12] }],
    ["path", { d: "M12 15h3m4 0h1" }, { r: "fade", o: [16, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
