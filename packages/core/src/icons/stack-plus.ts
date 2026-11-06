import { icon } from "../icon.js";

// Adapted from Tabler Icons "stack-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackPlus = icon("StackPlus", "stack-plus", {
  nodes: [
    ["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4" }],
    ["path", { d: "M4 12l8 4" }],
    ["path", { d: "M4 16l8 4" }],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", o: [19, 19] }],
  ],
});
