import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-guide" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowGuide = createIcon("ArrowGuide", "arrow-guide", {
  nodes: [
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 19] }],
    ["path", { d: "M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7" }, { r: "draw", d: 0.1, o: [14, 13] }],
    ["path", { d: "M18 4l3 3l-3 3" }, { r: "slide", d: 0.4, x: 1, a: 1.5, o: [19.5, 7] }],
  ],
});
