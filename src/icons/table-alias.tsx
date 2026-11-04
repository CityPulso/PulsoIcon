import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-alias" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableAlias = createIcon("TableAlias", "table-alias", {
  nodes: [
    ["path", { d: "M3 12v-7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-7" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 3v10" }],
    ["path", { d: "M2 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" }, { r: "pop", d: 0.1, o: [5, 19] }],
  ],
});
