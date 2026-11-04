import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-caret-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleCaretLeft = createIcon("CircleCaretLeft", "circle-caret-left", {
  nodes: [
    ["path", { d: "M9 12l4 -4v8l-4 -4" }, { r: "bounce", x: -1, y: 0, o: [12, 12] }],
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
  ],
});
