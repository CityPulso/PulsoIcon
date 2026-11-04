import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fence-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FenceOff = createIcon("FenceOff", "fence-off", {
  nodes: [
    ["path", { d: "M12 12h-8v4h12m4 0v-4h-4" }],
    ["path", { d: "M6 16v4h4v-4" }, { r: "grow", o: [8, 20] }],
    ["path", { d: "M10 12v-2m0 -4l-2 -2m-2 2v6" }, { r: "grow", d: 0.05, o: [8, 12] }],
    ["path", { d: "M14 16v4h4v-2" }, { r: "grow", d: 0.1, o: [16, 20] }],
    ["path", { d: "M18 12v-6l-2 -2l-2 2v4" }, { r: "grow", d: 0.15, o: [16, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
