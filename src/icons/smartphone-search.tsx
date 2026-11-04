import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneSearch = createIcon("SmartphoneSearch", "smartphone-search", {
  nodes: [
    ["path", { d: "M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
  ],
});
