import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-triangle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleTriangle = createIcon("CircleTriangle", "circle-triangle", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 20l7 -12h-14l7 12" }, { r: "spin", d: 0.1, a: 360, o: [12, 12] }],
  ],
});
