import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "seedling-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SeedlingOff = createIcon("SeedlingOff", "seedling-off", {
  nodes: [
    ["path", { d: "M11.412 7.407a6.025 6.025 0 0 0 -2.82 -2.82m-4.592 -.587h-1v2a6 6 0 0 0 6 6h3" }, { r: "sway", a: 6, o: [12, 20] }],
    ["path", { d: "M12 14a6 6 0 0 1 .255 -1.736m1.51 -2.514a5.981 5.981 0 0 1 4.235 -1.75h3v1c0 2.158 -1.14 4.05 -2.85 5.107m-3.15 .893h-3" }, { r: "sway", a: 6, o: [12, 20] }],
    ["path", { d: "M12 20v-8" }, { r: "grow", o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3", fill: "none" }, { r: "sway", a: 6, o: [12, 20] }],
    ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" }, { r: "sway", a: 6, o: [12, 20] }],
    ["path", { d: "M5 21h14", fill: "none" }, { r: "grow", o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
