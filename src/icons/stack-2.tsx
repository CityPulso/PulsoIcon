import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stack-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Stack2 = createIcon("Stack2", "stack-2", {
  nodes: [
    ["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4" }, { r: "float", a: 2, o: [12, 8] }],
    ["path", { d: "M4 12l8 4l8 -4" }, { r: "press", d: 0.1, a: 0.05, o: [12, 14] }],
    ["path", { d: "M4 16l8 4l8 -4" }, { r: "press", d: 0.15, a: 0.05, o: [12, 18] }],
  ],
});
