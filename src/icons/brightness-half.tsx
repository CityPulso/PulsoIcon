import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brightness-half" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrightnessHalf = createIcon("BrightnessHalf", "brightness-half", {
  nodes: [
    ["path", { d: "M12 9a3 3 0 0 0 0 6v-6" }, { r: "pulse", d: 0.1, a: 0.15, o: [12, 12] }],
    ["path", { d: "M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" }, { r: "spin", d: 0, a: 90, o: [12, 12] }],
  ],
});
