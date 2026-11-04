import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-third" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderThird = createIcon("GenderThird", "gender-third", {
  nodes: [
    ["path", { d: "M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" }, { r: "pulse", o: [16, 12] }],
    ["path", { d: "M11 12h-3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 12l-5 -4v8l5 -4" }, { r: "draw", d: 0.2 }],
  ],
});
