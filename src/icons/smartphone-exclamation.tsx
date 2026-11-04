import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneExclamation = createIcon("SmartphoneExclamation", "smartphone-exclamation", {
  nodes: [
    ["path", { d: "M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
