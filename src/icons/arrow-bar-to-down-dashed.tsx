import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-bar-to-down-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowBarToDownDashed = createIcon("ArrowBarToDownDashed", "arrow-bar-to-down-dashed", {
  nodes: [
    ["path", { d: "M12 14v-10" }, { r: "bounce", x: 0, y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M12 14l4 -4" }, { r: "bounce", x: 0, y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M12 14l-4 -4" }, { r: "bounce", x: 0, y: 1, a: 2, o: [12, 9] }],
    ["path", { d: "M4 20h3m13 0h-3m-3.5 0h-3" }, { r: "fade", d: 0.15, o: [12, 20] }],
  ],
});
