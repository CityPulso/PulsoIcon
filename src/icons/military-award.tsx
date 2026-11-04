import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "military-award" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MilitaryAward = createIcon("MilitaryAward", "military-award", {
  nodes: [
    ["path", { d: "M8 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "swing", a: 10, o: [12, 9] }],
    ["path", { d: "M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18" }],
    ["path", { d: "M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18" }],
  ],
});
