import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "list-details" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ListDetails = createIcon("ListDetails", "list-details", {
  nodes: [
    ["path", { d: "M13 5h8" }, { r: "growX", d: 0.05, o: [13, 5] }],
    ["path", { d: "M13 9h5" }, { r: "growX", d: 0.1, o: [13, 9] }],
    ["path", { d: "M13 15h8" }, { r: "growX", d: 0.2, o: [13, 15] }],
    ["path", { d: "M13 19h5" }, { r: "growX", d: 0.25, o: [13, 19] }],
    ["path", { d: "M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "pop", o: [6, 7] }],
    ["path", { d: "M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "pop", d: 0.15, o: [6, 17] }],
  ],
});
