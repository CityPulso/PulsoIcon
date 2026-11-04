import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "macro" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Macro = createIcon("Macro", "macro", {
  nodes: [
    ["path", { d: "M6 15a6 6 0 1 0 12 0" }, { r: "sway", d: 0.05, a: 5, o: [12, 21] }],
    ["path", { d: "M18 15a6 6 0 0 0 -6 6" }, { r: "sway", d: 0.1, a: 5, o: [12, 21] }],
    ["path", { d: "M12 21a6 6 0 0 0 -6 -6" }, { r: "sway", d: 0.1, a: 5, o: [12, 21] }],
    ["path", { d: "M12 21v-10" }, { r: "grow", d: 0, o: [12, 21] }],
    ["path", { d: "M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5" }, { r: "sway", d: 0.15, a: 10, o: [12, 11] }],
  ],
});
