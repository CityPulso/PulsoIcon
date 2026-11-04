import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-laptop-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LaptopOff = createIcon("LaptopOff", "laptop-off", {
  nodes: [
    ["path", { d: "M3 19h16" }],
    ["path", { d: "M10 6h8a1 1 0 0 1 1 1v8m-3 1h-10a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1" }, { r: "fold", o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
