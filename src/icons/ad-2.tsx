import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ad-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ad2 = createIcon("Ad2", "ad-2", {
  nodes: [
    ["path", { d: "M11.933 5h-6.933v16h13v-8" }],
    ["path", { d: "M14 17h-5" }, { r: "growX", d: 0.2, o: [9, 17] }],
    ["path", { d: "M9 13h5v-4h-5v4" }, { r: "pop", d: 0.1, o: [11.5, 11] }],
    ["path", { d: "M15 5v-2" }, { r: "flicker", o: [15, 4] }],
    ["path", { d: "M18 6l2 -2" }, { r: "flicker", d: 0.1, o: [19, 5] }],
    ["path", { d: "M19 9h2" }, { r: "flicker", d: 0.2, o: [20, 9] }],
  ],
});
