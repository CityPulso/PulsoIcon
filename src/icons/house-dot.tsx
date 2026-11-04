import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-dot" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseDot = createIcon("HouseDot", "house-dot", {
  nodes: [
    ["path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" }],
  ],
});
