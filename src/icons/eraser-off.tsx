import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eraser-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EraserOff = createIcon("EraserOff", "eraser-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l5 -4.993m2.009 -2.01l3 -3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41c-1.417 1.431 -2.406 2.432 -2.97 3m-2.02 2.043l-4.211 4.256" },
      { r: "shake", d: 0, a: 1 },
    ],
    ["path", { d: "M18 13.3l-6.3 -6.3" }, { r: "shake", d: 0, a: 1 }],
  ],
});
