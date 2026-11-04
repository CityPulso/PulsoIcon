import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-half" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleHalf = createIcon("CircleHalf", "circle-half", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", d: 0, o: [12, 12] }],
    ["path", { d: "M12 3v18" }],
  ],
});
