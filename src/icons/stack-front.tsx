import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stack-front" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackFront = createIcon("StackFront", "stack-front", {
  nodes: [
    ["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4", fill: "currentColor" }, { r: "slide", x: 0, y: -1, a: 2, o: [12, 8] }],
    ["path", { d: "M8 14l-4 2l8 4l8 -4l-4 -2" }],
    ["path", { d: "M8 10l-4 2l8 4l8 -4l-4 -2" }, { r: "slide", d: 0.05, x: 0, y: -1, a: 1, o: [12, 13] }],
  ],
});
