import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-androgyne" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderAndrogyne = createIcon("GenderAndrogyne", "gender-androgyne", {
  nodes: [
    ["path", { d: "M13 11l6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "pulse", o: [9, 15] }],
    ["path", { d: "M19 9v-4h-4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16.5 10.5l-3 -3" }, { r: "draw", d: 0.25 }],
  ],
});
