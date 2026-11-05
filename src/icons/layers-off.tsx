import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layers-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayersOff = createIcon("LayersOff", "layers-off", {
  nodes: [
    [
      "path",
      { d: "M8.59 4.581c.362 -.359 .86 -.581 1.41 -.581h8a2 2 0 0 1 2 2v8c0 .556 -.227 1.06 -.594 1.422m-3.406 .578h-6a2 2 0 0 1 -2 -2v-6" },
      { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] },
    ],
    ["path", { d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" }, { r: "slide", x: -0.7, y: 0.7, a: 1.2, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" },
      { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] },
    ],
    ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", fill: "none" }, { r: "slide", x: -0.7, y: 0.7, a: 1.2, o: [10, 14] }],
    ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", fill: "none" }, { r: "slide", x: -0.7, y: 0.7, a: 1.2, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
