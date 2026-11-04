import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "subtask" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Subtask = createIcon("Subtask", "subtask", {
  nodes: [
    ["path", { d: "M6 9l6 0" }],
    ["path", { d: "M4 5l4 0" }],
    ["path", { d: "M6 5v11a1 1 0 0 0 1 1h5" }, { r: "draw" }],
    ["path", { d: "M12 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2" }, { r: "growX", d: 0.2, o: [12, 9] }],
    ["path", { d: "M12 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2" }, { r: "growX", d: 0.35, o: [12, 17] }],
  ],
});
