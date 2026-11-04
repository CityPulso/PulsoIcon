import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "grave-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Grave2 = createIcon("Grave2", "grave-2", {
  nodes: [
    ["path", { d: "M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171" }, { r: "rise", a: 1, o: [12, 12] }],
    ["path", { d: "M12 7v5" }, { r: "draw" }],
    ["path", { d: "M10 9h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14" }],
  ],
});
