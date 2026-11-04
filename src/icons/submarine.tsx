import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "submarine" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Submarine = createIcon("Submarine", "submarine", {
  nodes: [
    ["path", { d: "M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10l-3 1.5l-1 -1.5h-2" }, { r: "float", a: 1.5 }],
    ["path", { d: "M17 11l-1 -3h-5l-1 3" }, { r: "float", a: 1.5 }],
    ["path", { d: "M13 8v-2a1 1 0 0 1 1 -1h1" }, { r: "float", a: 1.5 }],
  ],
});
