import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagon-3d" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Hexagon3d = createIcon("Hexagon3d", "hexagon-3d", {
  nodes: [
    [
      "path",
      {
        d: "M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03l.002 0",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M12 16.5v4.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4.5 7.5l3.5 2.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 10l4 -2.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 7.5v4.5l-4 2" }, { r: "pop", d: 0.05, a: 0.15, o: [12, 12] }],
    ["path", { d: "M12 12l4 2" }, { r: "pop", d: 0.05, a: 0.15, o: [12, 12] }],
    ["path", { d: "M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4l4 2.5" }, { r: "pop", d: 0.05, a: 0.15, o: [12, 12] }],
  ],
});
