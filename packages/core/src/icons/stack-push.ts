import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-push" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackPush = icon("StackPush", "stack-push", {
  nodes: [
    ["path", { d: "M6 10l-2 1l8 4l8 -4l-2 -1" }, { r: "press", d: 0.25, a: 0.1, o: [12, 12.5] }],
    ["path", { d: "M4 15l8 4l8 -4" }],
    ["path", { d: "M12 4v7" }, { r: "shoot", y: 1, a: 4 }],
    ["path", { d: "M15 8l-3 3l-3 -3" }, { r: "shoot", y: 1, a: 4 }],
  ],
});
