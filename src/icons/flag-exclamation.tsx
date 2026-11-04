import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagExclamation = createIcon("FlagExclamation", "flag-exclamation", {
  nodes: [
    ["path", { d: "M15.035 15.408a4.98 4.98 0 0 1 -3.035 -1.408a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
