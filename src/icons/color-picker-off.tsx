import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "color-picker-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ColorPickerOff = createIcon("ColorPickerOff", "color-picker-off", {
  nodes: [
    ["path", { d: "M11 7l6 6" }, { r: "tilt", o: [5, 19] }],
    ["path", { d: "M12 8l3.699 -3.699a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-3.702 3.702m-2 2l-6 6h-4v-4l6 -6" }, { r: "tilt", o: [5, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
