import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "jetpack" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Jetpack = createIcon("Jetpack", "jetpack", {
  svg: { r: "float", a: 1.5 },
  nodes: [
    ["path", { d: "M10 6a3 3 0 1 0 -6 0v7h6v-7" }],
    ["path", { d: "M14 13h6v-7a3 3 0 0 0 -6 0v7" }],
    ["path", { d: "M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" }, { r: "flicker" }],
    ["path", { d: "M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M10 8h4" }],
    ["path", { d: "M10 11h4" }],
  ],
});
