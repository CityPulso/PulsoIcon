import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "plant-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlantOff = createIcon("PlantOff", "plant-off", {
  nodes: [
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8" }, { r: "press", o: [12, 19] }],
    ["path", { d: "M11.9 7.908a6 6 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2" }, { r: "sway", a: 6, o: [12, 15] }],
    ["path", { d: "M12.531 8.528a6 6 0 0 1 5.469 -3.528h3v1a6 6 0 0 1 -5.037 5.923" }, { r: "sway", a: 6, o: [12, 15] }],
    ["path", { d: "M12 15v-3" }, { r: "sway", a: 6, o: [12, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
