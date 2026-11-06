import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-backward" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackBackward = icon("StackBackward", "stack-backward", {
  nodes: [
    ["path", { d: "M14 12l6 -3l-8 -4l-8 4l6 3" }],
    ["path", { d: "M10 12l-6 3l8 4l8 -4l-6 -3l-2 1l-2 -1", fill: "currentColor" }, { r: "slide", x: 0, y: -1, a: 2, o: [12, 15] }],
  ],
});
