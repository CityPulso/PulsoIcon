import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stack-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackMinus = createIcon("StackMinus", "stack-minus", {
  nodes: [
    ["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4" }],
    ["path", { d: "M4 12l8 4" }],
    ["path", { d: "M4 16l8 4" }],
    ["path", { d: "M16 19h6" }, { r: "draw" }],
  ],
});
