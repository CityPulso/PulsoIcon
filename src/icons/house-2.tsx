import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const House2 = createIcon("House2", "house-2", {
  nodes: [
    ["path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }, { r: "bounce", y: -1, a: 1, o: [12, 7.5] }],
    ["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }],
    ["path", { d: "M10 12h4v4h-4l0 -4" }, { r: "pop", d: 0.15, o: [12, 14] }],
  ],
});
