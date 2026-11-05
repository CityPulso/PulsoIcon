import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "folders-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FoldersOff = createIcon("FoldersOff", "folders-off", {
  nodes: [
    [
      "path",
      { d: "M17 17h-8a2 2 0 0 1 -2 -2v-8m1.177 -2.823c.251 -.114 .53 -.177 .823 -.177h3l2 2h5a2 2 0 0 1 2 2v7c0 .55 -.223 1.05 -.583 1.411" },
      { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] },
    ],
    ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" }, { r: "float", d: 0.08, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      { d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" },
      { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] },
    ],
    ["path", { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1", fill: "none" }, { r: "float", d: 0.08, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
