import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "reserved-line" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ReservedLine = createIcon("ReservedLine", "reserved-line", {
  nodes: [
    ["path", { d: "M9 20h6" }],
    ["path", { d: "M12 14v6" }],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -6" }, { r: "swing", a: 4, o: [12, 14] }],
    ["path", { d: "M9 9h6" }, { r: "growX", d: 0.1, o: [9, 9] }],
  ],
});
