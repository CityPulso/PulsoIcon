import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-0" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number0 = createIcon("Number0", "number-0", {
  nodes: [
    ["path", { d: "M16 16v-8" }, { r: "draw" }],
    ["path", { d: "M12 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4" }, { r: "draw", d: 0.15 }],
  ],
});
