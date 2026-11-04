import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brackets-angle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsAngle = createIcon("BracketsAngle", "brackets-angle", {
  nodes: [
    ["path", { d: "M8 4l-5 8l5 8" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M16 4l5 8l-5 8" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
  ],
});
