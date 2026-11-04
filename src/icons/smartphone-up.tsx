import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneUp = createIcon("SmartphoneUp", "smartphone-up", {
  nodes: [
    ["path", { d: "M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", d: 0.1, y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", d: 0.1, y: -1, a: 2 }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
  ],
});
