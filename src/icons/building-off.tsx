import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingOff = createIcon("BuildingOff", "building-off", {
  nodes: [
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M9 12h1" }, { r: "blink", d: 0.1, o: [9.5, 12] }],
    ["path", { d: "M9 16h1" }, { r: "blink", d: 0.2, o: [9.5, 16] }],
    ["path", { d: "M14 8h1" }, { r: "blink", d: 0.15, o: [14.5, 8] }],
    ["path", { d: "M14 16h1" }, { r: "blink", d: 0.25, o: [14.5, 16] }],
    ["path", { d: "M5 21v-16" }],
    ["path", { d: "M7 3h10c1 0 2 1 2 2v10" }],
    ["path", { d: "M19 19v2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
