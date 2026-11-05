import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "notes-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NotesOff = createIcon("NotesOff", "notes-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M11 7h4" }, { r: "growX", d: 0.1, o: [11, 7] }],
    ["path", { d: "M9 11h2" }, { r: "growX", d: 0.2, o: [9, 11] }],
    ["path", { d: "M9 15h4" }, { r: "growX", d: 0.3, o: [9, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M9 7l6 0" }, { r: "growX", d: 0.1, o: [11, 7] }, "line"],
    ["path", { d: "M9 11l6 0" }, { r: "growX", d: 0.2, o: [9, 11] }, "line"],
    ["path", { d: "M9 15l4 0" }, { r: "growX", d: 0.3, o: [9, 15] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
