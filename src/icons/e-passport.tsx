import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "e-passport" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EPassport = createIcon("EPassport", "e-passport", {
  nodes: [
    ["path", { d: "M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -10" }],
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M9 12h-7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 12h7" }, { r: "draw", d: 0.1 }],
  ],
});
