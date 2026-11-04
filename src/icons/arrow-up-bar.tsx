import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-up-bar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowUpBar = createIcon("ArrowUpBar", "arrow-up-bar", {
  nodes: [
    ["path", { d: "M12 21l0 -18" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M15 6l-3 -3l-3 3" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [12, 4.5] }],
    ["path", { d: "M9 21l6 0" }, { r: "press", a: 0.2, o: [12, 21] }],
  ],
});
