import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphonePlus = createIcon("SmartphonePlus", "smartphone-plus", {
  nodes: [
    ["path", { d: "M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 19] }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
  ],
});
