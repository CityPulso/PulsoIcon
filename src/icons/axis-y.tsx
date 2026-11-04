import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "axis-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AxisY = createIcon("AxisY", "axis-y", {
  nodes: [
    ["path", { d: "M11 20h-.01" }, { r: "pop", d: 0.3, o: [11, 20] }],
    ["path", { d: "M15 20h-.01" }, { r: "pop", d: 0.4, o: [15, 20] }],
    ["path", { d: "M19 20h-.01" }, { r: "pop", d: 0.5, o: [19, 20] }],
    ["path", { d: "M4 7l3 -3l3 3" }, { r: "slide", d: 0.2, x: 0, y: -1, a: 2 }],
    ["path", { d: "M7 20v-16" }, { r: "draw" }],
  ],
});
