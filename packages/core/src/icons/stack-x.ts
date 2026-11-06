import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackX = icon("StackX", "stack-x", {
  nodes: [
    ["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4" }],
    ["path", { d: "M4 12l8 4" }],
    ["path", { d: "M4 16l8 4" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw" }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.15 }],
  ],
});
