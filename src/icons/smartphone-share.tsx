import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneShare = createIcon("SmartphoneShare", "smartphone-share", {
  nodes: [
    ["path", { d: "M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
    ["path", { d: "M12 17v.01" }],
  ],
});
