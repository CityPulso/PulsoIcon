import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-11" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number11 = createIcon("Number11", "number-11", {
  text: true,
  nodes: [
    ["path", { d: "M8 20v-16l-5 5" }, { r: "draw" }],
    ["path", { d: "M18 20v-16l-5 5" }, { r: "draw", d: 0.15 }],
  ],
});
