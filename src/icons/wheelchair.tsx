import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wheelchair" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Wheelchair = createIcon("Wheelchair", "wheelchair", {
  nodes: [
    ["path", { d: "M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "spin", o: [8, 16] }],
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [19, 19] }],
    ["path", { d: "M19 17a3 3 0 0 0 -3 -3h-3.4" }],
    ["path", { d: "M3 3h1a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M6 8h11" }],
    ["path", { d: "M15 8v6" }],
  ],
});
