import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "antenna-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AntennaOff = createIcon("AntennaOff", "antenna-off", {
  nodes: [
    ["path", { d: "M20 4v8" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M16 4.5v7" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M12 5v3m0 4v9" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M8 8v2.5" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M4 6v4" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M20 8h-8m-4 0h-4" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
