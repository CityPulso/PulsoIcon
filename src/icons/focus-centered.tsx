import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "focus-centered" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FocusCentered = createIcon("FocusCentered", "focus-centered", {
  nodes: [
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", a: 0.4, o: [12, 12] }],
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 12] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 12] }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 12] }],
  ],
});
