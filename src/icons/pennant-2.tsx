import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pennant-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pennant2 = createIcon("Pennant2", "pennant-2", {
  nodes: [
    ["path", { d: "M16 21h-4" }],
    ["path", { d: "M14 21v-18" }],
    ["path", { d: "M14 4l-9 4l9 4" }, { r: "sway", a: 8, o: [14, 8] }],
  ],
});
