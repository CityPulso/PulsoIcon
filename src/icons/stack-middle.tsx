import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stack-middle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StackMiddle = createIcon("StackMiddle", "stack-middle", {
  nodes: [
    ["path", { d: "M16 10l4 -2l-8 -4l-8 4l4 2" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1, o: [12, 7] }],
    ["path", { d: "M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2", fill: "currentColor" }, { r: "pulse", a: 0.12, o: [12, 13] }],
    ["path", { d: "M8 14l-4 2l8 4l8 -4l-4 -2" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 1, o: [12, 17] }],
  ],
});
