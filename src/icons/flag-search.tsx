import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagSearch = createIcon("FlagSearch", "flag-search", {
  nodes: [
    ["path", { d: "M12 14a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", d: 0.1, o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", d: 0.1, o: [18, 18] }],
  ],
});
