import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rings" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Rings = createIcon("Rings", "rings", {
  nodes: [
    ["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "swing", a: 10, o: [7, 4] }],
    ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "swing", d: 0.1, a: 10, o: [17, 4] }],
    ["path", { d: "M7 15v-11" }, { r: "swing", a: 10, o: [7, 4] }],
    ["path", { d: "M17 15v-11" }, { r: "swing", d: 0.1, a: 10, o: [17, 4] }],
    ["path", { d: "M3 4h18" }],
  ],
});
