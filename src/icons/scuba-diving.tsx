import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "scuba-diving" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScubaDiving = createIcon("ScubaDiving", "scuba-diving", {
  nodes: [
    ["path", { d: "M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "float", a: 2 }],
    ["path", { d: "M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" }, { r: "sway", a: 4, o: [2, 2] }],
    ["path", { d: "M11 8l4.5 1.5" }, { r: "sway", a: 4, o: [2, 2] }],
  ],
});
