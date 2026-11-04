import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseShare = createIcon("HouseShare", "house-share", {
  nodes: [
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" }],
    ["path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 0.7, y: -0.7, a: 2 }],
  ],
});
