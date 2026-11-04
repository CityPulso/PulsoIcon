import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-right-bar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowRightBar = createIcon("ArrowRightBar", "arrow-right-bar", {
  nodes: [
    ["path", { d: "M18 15l3 -3l-3 -3" }, { r: "bounce", d: 0.05, x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "M3 12h18" }, { r: "bounce", d: 0.05, x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 9v6" }, { r: "press", a: 0.2, o: [3, 12] }],
  ],
});
