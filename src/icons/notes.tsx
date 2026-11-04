import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "notes" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Notes = createIcon("Notes", "notes", {
  nodes: [
    ["path", { d: "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M9 7l6 0" }, { r: "growX", o: [9, 7] }],
    ["path", { d: "M9 11l6 0" }, { r: "growX", d: 0.12, o: [9, 11] }],
    ["path", { d: "M9 15l4 0" }, { r: "growX", d: 0.24, o: [9, 15] }],
  ],
});
