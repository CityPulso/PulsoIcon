import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bandage-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BandageOff = createIcon("BandageOff", "bandage-off", {
  nodes: [
    ["path", { d: "M10 12v.01" }, { r: "pop", d: 0.2, o: [10, 12] }],
    ["path", { d: "M12 14v.01" }, { r: "pop", d: 0.3, o: [12, 14] }],
    ["path", { d: "M10.513 6.487l1.987 -1.987a4.95 4.95 0 0 1 7 7l-2.018 2.018m-1.982 1.982l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" }, { r: "wobble", a: 6, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
