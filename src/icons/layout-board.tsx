import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layout-board" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutBoard = createIcon("LayoutBoard", "layout-board", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M4 9h8" }, { r: "growX", o: [4, 9] }],
    ["path", { d: "M12 15h8" }, { r: "growX", d: 0.2, o: [12, 15] }],
    ["path", { d: "M12 4v16" }, { r: "grow", d: 0.1, o: [12, 4] }],
  ],
});
