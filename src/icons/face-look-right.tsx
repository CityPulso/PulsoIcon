import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-look-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceLookRight = createIcon("FaceLookRight", "face-look-right", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M15 9h-.01" }, { r: "slide", x: 1, y: 0, a: 1, o: [15, 9] }],
    ["path", { d: "M20 15h-4" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 1, o: [18, 15] }],
  ],
});
