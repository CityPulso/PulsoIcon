import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "triangle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TriangleOff = createIcon("TriangleOff", "triangle-off", {
  nodes: [
    [
      "path",
      { d: "M7.825 7.83l-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871h16.107m1.998 -1.99a1.913 1.913 0 0 0 -.255 -.88l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0l-1.028 1.718" },
      { r: "wobble", o: [12, 14] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
