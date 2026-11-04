import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-intergender" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderIntergender = createIcon("GenderIntergender", "gender-intergender", {
  nodes: [
    ["path", { d: "M13.5 11.5l6.5 6.5v-4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11.5 13.5l6.5 6.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" }, { r: "pulse", o: [9, 9] }],
    ["path", { d: "M14 20l2 -2" }, { r: "draw", d: 0.25 }],
  ],
});
