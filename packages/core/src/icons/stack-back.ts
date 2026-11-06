import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-back" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackBack = icon("StackBack", "stack-back", {
  nodes: [
    ["path", { d: "M4 8l8 4l8 -4l-8 -4l-8 4" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1, o: [12, 8] }],
    ["path", { d: "M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2", fill: "currentColor" }, { r: "slide", x: 0, y: -1, a: 2, o: [12, 17] }],
    ["path", { d: "M8 10l-4 2l4 2m8 0l4 -2l-4 -2" }],
  ],
});
