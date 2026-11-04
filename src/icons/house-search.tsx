import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseSearch = createIcon("HouseSearch", "house-search", {
  nodes: [
    ["path", { d: "M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, a: 14, o: [18, 18] }],
  ],
});
