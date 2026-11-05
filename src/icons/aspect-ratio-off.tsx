import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "aspect-ratio-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AspectRatioOff = createIcon("AspectRatioOff", "aspect-ratio-off", {
  nodes: [
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" }],
    ["path", { d: "M7 12v-3h2" }, { r: "slide", x: -0.7, y: -0.7, a: 1, o: [8, 10] }],
    ["path", { d: "M17 12v1m-2 2h-1" }, { r: "slide", x: 0.7, y: 0.7, a: 1, o: [16, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M7 12v-3h3" }, { r: "slide", x: -0.7, y: -0.7, a: 1, o: [8, 10] }, "line"],
    ["path", { d: "M17 12v3h-3" }, { r: "slide", x: 0.7, y: 0.7, a: 1, o: [16, 14] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
