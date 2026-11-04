import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagPlus = createIcon("FlagPlus", "flag-plus", {
  nodes: [
    ["path", { d: "M14.433 15.315a4.978 4.978 0 0 1 -2.433 -1.315a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M16 19h6" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", d: 0.1, o: [19, 19] }],
  ],
});
