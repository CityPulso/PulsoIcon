import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-left-bar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowLeftBar = createIcon("ArrowLeftBar", "arrow-left-bar", {
  nodes: [
    ["path", { d: "M21 12h-18" }, { r: "bounce", d: 0.05, x: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M6 9l-3 3l3 3" }, { r: "bounce", d: 0.05, x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M21 9v6" }, { r: "press", a: 0.2, o: [21, 12] }],
  ],
});
