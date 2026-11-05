import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "notebook-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NotebookOff = createIcon("NotebookOff", "notebook-off", {
  nodes: [
    ["path", { d: "M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828a2 2 0 0 1 -1.821 1.172h-11a1 1 0 0 1 -1 -1v-14m4 -1v1m0 4v13" }, { r: "open", o: [5, 12] }],
    ["path", { d: "M13 8h2" }, { r: "growX", d: 0.2, o: [13, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
