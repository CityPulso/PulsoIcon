import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-move-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMoveUp = createIcon("ArrowMoveUp", "arrow-move-up", {
  nodes: [
    ["path", { d: "M12 13v-10" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 8] }],
    ["path", { d: "M9 6l3 -3l3 3" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 4.5] }],
    ["path", { d: "M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4" }, { r: "pulse", a: 0.2, o: [12, 19] }],
  ],
});
