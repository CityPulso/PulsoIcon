import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-school" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellSchool = createIcon("BellSchool", "bell-school", {
  nodes: [
    ["path", { d: "M4 10a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" }, { r: "shake", d: 0.2, a: 0.6 }],
    ["path", { d: "M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" }],
    ["path", { d: "M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" }, { r: "swing", a: -14, o: [16, 17] }],
    ["path", { d: "M10 10v.01" }, { r: "shake", d: 0.2, a: 0.6 }],
    ["path", { d: "M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "swing", a: -14, o: [16, 17] }],
  ],
});
