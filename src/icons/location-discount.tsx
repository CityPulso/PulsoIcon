import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-discount" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationDiscount = createIcon("LocationDiscount", "location-discount", {
  nodes: [
    ["path", { d: "M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826" }],
    ["path", { d: "M16 21l5 -5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.3, o: [21, 21] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.2, o: [16, 16] }],
  ],
});
