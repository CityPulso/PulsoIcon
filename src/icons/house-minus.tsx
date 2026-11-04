import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "home-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HouseMinus = createIcon("HouseMinus", "house-minus", {
  nodes: [
    ["path", { d: "M19 15v-3h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" }],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.15, o: [19, 19] }],
    ["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" }],
  ],
});
